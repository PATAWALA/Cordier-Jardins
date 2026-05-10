import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-natural-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-natural-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className={`mt-4 w-20 h-1 bg-primary-500 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeading;