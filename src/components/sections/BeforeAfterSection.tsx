import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percent)));
  };

  return (
    <section className="py-20 bg-natural-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Avant / Après"
          subtitle="Découvrez la métamorphose de nos réalisations"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Comparateur 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg cursor-col-resize group"
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              const rect = e.currentTarget.getBoundingClientRect();
              const x = touch.clientX - rect.left;
              const percent = (x / rect.width) * 100;
              setSliderPosition(percent);
            }}
          >
            {/* Image après (fond) */}
            <div className="absolute inset-0">
              <img
                src="/realisations/avant-apres-1.jpg"
                alt="Jardin après rénovation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image avant (découpée) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/realisations/avant-apres-1-avant.jpg"
                alt="Jardin avant rénovation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ligne de séparation */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            />
            {/* Poignée */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-primary-500"
              style={{ left: `${sliderPosition}%` }}
            >
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm0 14a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 17z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>

          {/* Texte explicatif */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-natural-800 mb-4">Une transformation radicale</h3>
            <p className="text-natural-600 leading-relaxed mb-6">
              Faites glisser le curseur pour voir la différence. Nous avons entièrement repensé ce jardin pour créer un espace de vie extérieur harmonieux, alliant terrasse en bois, massifs végétaux et pelouse impeccable.
            </p>
            <ul className="space-y-3 text-natural-700">
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Terrasse en bois composite</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Plantation de haies persistantes</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Éclairage paysager intégré</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;