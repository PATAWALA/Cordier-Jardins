import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import StickyCTA from '../ui/StickyCTA';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/services', label: 'Services' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/zones-desservies', label: 'Zones' },
  { to: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-natural-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <Link to="/" className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary-700">Cordier</span>
          <span className="text-2xl font-light text-natural-600">Jardins</span>
        </Link>

        <ul className="hidden lg:flex gap-8 text-sm font-medium text-natural-700">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="relative py-1 hover:text-primary-600 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="primary" size="sm" to="/contact">
            Devis gratuit
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-natural-700 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu principal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-natural-200 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-base font-medium text-natural-700 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" to="/contact" className="w-full mt-2" onClick={() => setMobileOpen(false)}>
                Devis gratuit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <StickyCTA />
    </header>
  );
};

export default Header;