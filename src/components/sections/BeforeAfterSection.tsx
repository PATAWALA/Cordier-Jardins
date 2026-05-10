import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

// Définition des paires d’images
const beforeAfterProjects = [
  { id: 1, avant: '/images/avant1.jpg', apres: '/images/apres1.jpg', titre: 'Jardin résidentiel – Namur', description: 'Création complète avec terrasse bois, massifs et pelouse' },
  { id: 2, avant: '/images/avant2.jpg', apres: '/images/apres2.jpg', titre: 'Terrasse urbaine – Bruxelles', description: 'Transformation d’une cour en espace de vie chaleureux' },
  { id: 3, avant: '/images/avant3.jpg', apres: '/images/apres3.jpg', titre: 'Jardin de campagne – Liège', description: 'Restructuration d’un grand terrain avec haies et éclairage' },
  { id: 4, avant: '/images/avant4.jpg', apres: '/images/apres4.jpg', titre: 'Entrée de propriété – Charleroi', description: 'Allée, clôture et massifs pour une première impression parfaite' },
];

const BeforeAfterSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const currentProject = beforeAfterProjects[currentIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percent)));
  };

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % beforeAfterProjects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);

  return (
    <section className="py-20 bg-natural-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Avant / Après"
          subtitle="Faites glisser le curseur pour voir la différence"
        />

        {/* Carrousel de projets */}
        <div className="relative">
          {/* Comparateur principal */}
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-col-resize group"
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              const rect = e.currentTarget.getBoundingClientRect();
              const x = touch.clientX - rect.left;
              const percent = (x / rect.width) * 100;
              setSliderPosition(percent);
            }}
          >
            {/* Image Après (fond complet) */}
            <div className="absolute inset-0">
              <img
                src={currentProject.apres}
                alt={`Après rénovation – ${currentProject.titre}`}
                className="w-full h-full object-cover"
              />
              {/* Badge "Après" */}
              <span className="absolute top-4 right-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                APRÈS
              </span>
            </div>

            {/* Image Avant (découpée selon sliderPosition) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentProject.avant}
                alt={`Avant rénovation – ${currentProject.titre}`}
                className="w-full h-full object-cover"
              />
              {/* Badge "Avant" */}
              <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                AVANT
              </span>
            </div>

            {/* Ligne de séparation */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            />

            {/* Poignée de déplacement */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-500 cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm0 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 17z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>

          {/* Contrôles du carrousel */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-white border border-natural-200 hover:border-primary-400 transition-colors shadow-sm"
              aria-label="Projet précédent"
            >
              <svg className="w-5 h-5 text-natural-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold text-natural-800">{currentProject.titre}</h3>
              <p className="text-sm text-natural-500 mt-1">{currentProject.description}</p>
              <div className="flex justify-center gap-2 mt-3">
                {beforeAfterProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-primary-500 w-6' : 'bg-natural-300 hover:bg-natural-400'
                    }`}
                    aria-label={`Projet ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-white border border-natural-200 hover:border-primary-400 transition-colors shadow-sm"
              aria-label="Projet suivant"
            >
              <svg className="w-5 h-5 text-natural-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;