import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-natural-200/80'
          : 'bg-white backdrop-blur-md shadow-sm border-b border-natural-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-3">
        {/* Logo + Baseline */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <img
            src="/images/logo.jpg"
            alt="Cordier Jardins – Paysagiste premium en Belgique"
            className="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
          <span className="text-sm md:text-base text-natural-700 font-semibold tracking-wide leading-tight">
            Cordier Jardins
          </span>
        </Link>

        {/* Navigation desktop + coordonnées */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium text-natural-700">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`relative py-2 transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-700 font-semibold'
                        : 'hover:text-primary-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Téléphone + CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+32470000000"
              className="flex items-center gap-2 text-sm text-natural-600 hover:text-primary-600 transition-colors"
              aria-label="Appeler Cordier Jardins"
            >
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden xl:inline">+32 470 00 00 00</span>
            </a>
            <Button variant="primary" size="sm" to="/contact" className="flex-shrink-0">
              <span className="mr-1.5">📋</span> Devis gratuit
            </Button>
          </div>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="lg:hidden p-2 text-natural-700 focus:outline-none flex-shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu principal"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-natural-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-lg font-medium ${
                    location.pathname === link.to
                      ? 'text-primary-700'
                      : 'text-natural-700 hover:text-primary-600'
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-natural-200 my-2" />
              <a
                href="tel:+32470000000"
                className="flex items-center gap-2 text-base text-natural-600"
              >
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +32 470 00 00 00
              </a>
              <Button variant="primary" to="/contact" className="w-full">
                <span className="mr-1.5">📋</span> Devis gratuit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* StickyCTA – visible uniquement sur mobile quand le menu est fermé */}
      {!mobileOpen && <StickyCTA />}
    </header>
  );
};

export default Header;