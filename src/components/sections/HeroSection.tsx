import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-natural-900">
      {/* Image de fond avec zoom progressif */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/apres2.jpg"
          alt="Jardin paysager contemporain avec terrasse en bois, pelouse et massifs fleuris – Cordier Jardins Belgique"
          className={`w-full h-full object-cover ${
            isMobile ? '' : 'animate-zoom-slow'
          }`}
          style={isMobile ? {} : { transform: `translateY(${scrollY * 0.15}px) scale(1.05)` }}
          loading="eager"
          decoding="async"
          width={2070}
          height={1380}
        />
        {/* Overlay optimisé */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Contenu principal – identique à la version précédente */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20"
      >
        {/* Badge confiance compact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20"
        >
          <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>98% d'avis 5★</span>
        </motion.div>

        {/* Titre principal */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          Votre jardin de rêve
          <br />
          <span className="text-primary-400 relative inline-block">
            devient réalité
            <svg className="absolute -bottom-1 left-0 w-full h-2 text-primary-500/50" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 text-gray-200/80 font-light leading-relaxed px-2">
          Artisans paysagistes depuis 15 ans – création, entretien, terrasse, clôture
          <strong className="text-white font-medium"> partout en Belgique</strong>. Devis gratuit en 48h.
        </p>

        {/* Boutons d'action - taille responsive */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Button variant="primary" size="md" to="/contact" className="sm:size-lg group text-sm sm:text-base px-4 sm:px-8 py-3 sm:py-4">
            <span className="mr-1.5">📋</span> Devis gratuit
            <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <Button variant="outline" size="md" to="/realisations" className="sm:size-lg group text-sm sm:text-base px-4 sm:px-8 py-3 sm:py-4">
            <span className="mr-1.5">🖼️</span> Nos réalisations
          </Button>
        </div>

        {/* Barre de confiance - grille cohérente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-3 gap-3 max-w-lg mx-auto text-white/80"
        >
          <div className="flex flex-col items-center gap-1">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium">Satisfait ou refait</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium">Devis en 48h</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium">Assurances pro</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2.5 bg-white/50 rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;