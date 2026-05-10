import { Link } from 'react-router-dom';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    to?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
    type?: never;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg',
  secondary: 'bg-white hover:bg-natural-50 text-primary-700 border border-primary-300',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-700',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    to,
    ...rest
  } = props;

  const base = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return <Link to={to} className={base} {...rest as AnchorHTMLAttributes<HTMLAnchorElement>}>{children}</Link>;
  }

  return <button className={base} {...rest as ButtonHTMLAttributes<HTMLButtonElement>}>{children}</button>;
}