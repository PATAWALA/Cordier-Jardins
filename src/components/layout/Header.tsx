import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

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
          ? 'bg-white shadow-lg border-b border-natural-200'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + Nom premium */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative">
            <img
              src="/images/logo.jpg"
              alt="Cordier Jardins – Paysagiste premium en Belgique"
              className="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105 rounded-lg shadow-sm"
              loading="eager"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-bold text-natural-800 tracking-tight">
              Cordier
            </span>
            <span className="text-sm md:text-base font-light text-natural-500 -mt-0.5">
              Jardins
            </span>
          </div>
        </Link>

        {/* Navigation desktop */}
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
              className="flex items-center gap-2 text-sm text-natural-600 hover:text-primary-600 transition-colors font-medium"
              aria-label="Appeler Cordier Jardins"
            >
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden xl:inline">+32494679682</span>
            </a>
            <Button variant="primary" size="sm" to="/contact" className="flex-shrink-0 shadow-md hover:shadow-lg">
              <span className="mr-1.5">📋</span> Devis gratuit
            </Button>
          </div>
        </div>

        {/* Boutons mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* WhatsApp mobile discret */}
          <a
            href="https://wa.me/32494679682"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 bg-green-500 text-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="WhatsApp Cordier Jardins"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          {/* Bouton menu hamburger */}
          <button
            className="p-2 text-natural-700 focus:outline-none flex-shrink-0"
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
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-natural-200 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-lg font-medium py-1 ${
                    location.pathname === link.to
                      ? 'text-primary-700 border-l-4 border-primary-500 pl-3 -ml-3'
                      : 'text-natural-700 hover:text-primary-600'
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-natural-200 my-2" />
              <a
                href="tel:+32470000000"
                className="flex items-center gap-2 text-base text-natural-600 font-medium"
              >
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +32 470 00 00 00
              </a>
              <Button variant="primary" to="/contact" className="w-full text-base py-4">
                <span className="mr-1.5">📋</span> Devis gratuit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;