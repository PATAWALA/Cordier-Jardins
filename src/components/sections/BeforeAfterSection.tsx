import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const beforeAfterProjects = [
  {
    id: 1,
    avant: '/images/avant1.jpg',
    apres: '/images/apres1.jpg',
    titre: 'Jardin résidentiel – Namur',
    description: 'Création complète avec terrasse bois, massifs et pelouse',
  },
  {
    id: 2,
    avant: '/images/avant2.jpg',
    apres: '/images/apres2.jpg',
    titre: 'Terrasse urbaine – Bruxelles',
    description: 'Transformation d’une cour en espace de vie chaleureux',
  },
  {
    id: 3,
    avant: '/images/avant3.jpg',
    apres: '/images/apres3.jpg',
    titre: 'Jardin de campagne – Liège',
    description: 'Restructuration d’un grand terrain avec haies et éclairage',
  },
  {
    id: 4,
    avant: '/images/avant4.jpg',
    apres: '/images/apres4.jpg',
    titre: 'Entrée de propriété – Charleroi',
    description: 'Allée, clôture et massifs pour une première impression parfaite',
  },
];

const BeforeAfterCard: React.FC<{
  avant: string;
  apres: string;
  titre: string;
  description: string;
  index: number;
  reverse?: boolean;
}> = ({ avant, apres, titre, description, index, reverse = false }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percent)));
  };

  // sliderPosition élevé (curseur à droite) → on voit AVANT en grand → badge AVANT
  // sliderPosition faible (curseur à gauche) → on voit APRÈS en grand → badge APRÈS
  const showAvant = sliderPosition >= 50;
  const showApres = sliderPosition < 50;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start"
    >
      {/* Comparateur */}
      <div
        className={`relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl cursor-col-resize group md:col-span-3 ${
          reverse ? 'md:order-2' : 'md:order-1'
        }`}
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
            src={apres}
            alt={`Après rénovation – ${titre}`}
            className="w-full h-full object-cover"
            width={800}
            height={600}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding={index === 0 ? 'sync' : 'async'}
          />
        </div>

        {/* Image Avant (découpée) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={avant}
            alt={`Avant rénovation – ${titre}`}
            className="w-full h-full object-cover"
            width={800}
            height={600}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding={index === 0 ? 'sync' : 'async'}
          />
        </div>

        {/* Badge AVANT – visible quand sliderPosition >= 50 (curseur à droite) */}
        <span
          className={`absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm z-30 pointer-events-none transition-opacity duration-300 ${
            showAvant ? 'opacity-100' : 'opacity-0'
          }`}
        >
          AVANT
        </span>

        {/* Badge APRÈS – visible quand sliderPosition < 50 (curseur à gauche) */}
        <span
          className={`absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm z-30 pointer-events-none transition-opacity duration-300 ${
            showApres ? 'opacity-100' : 'opacity-0'
          }`}
        >
          APRÈS
        </span>

        {/* Ligne de séparation */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Poignée de déplacement */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-500 cursor-col-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <svg className="w-5 h-5 text-primary-500 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm0 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 17z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Texte */}
      <div
        className={`md:col-span-2 flex flex-col justify-center h-full ${
          reverse ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-natural-800 mb-3">{titre}</h3>
        <p className="text-natural-600 leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1 text-sm text-natural-500 bg-natural-100 px-3 py-1.5 rounded-full">
            <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Réalisé avec soin
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-natural-500 bg-natural-100 px-3 py-1.5 rounded-full">
            <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Délais respectés
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-20 bg-natural-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Avant / Après"
          subtitle="Faites glisser le curseur pour voir la différence"
        />
        <div className="space-y-16 md:space-y-20 mt-12">
          {beforeAfterProjects.map((project, index) => (
            <BeforeAfterCard
              key={project.id}
              avant={project.avant}
              apres={project.apres}
              titre={project.titre}
              description={project.description}
              index={index}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;