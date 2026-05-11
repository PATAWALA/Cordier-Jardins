import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

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

        {/* Badge AVANT */}
        <span
          className={`absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm z-30 pointer-events-none transition-opacity duration-300 ${
            showAvant ? 'opacity-100' : 'opacity-0'
          }`}
        >
          AVANT
        </span>

        {/* Badge APRÈS */}
        <span
          className={`absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm z-30 pointer-events-none transition-opacity duration-300 ${
            showApres ? 'opacity-100' : 'opacity-0'
          }`}
        >
          APRÈS
        </span>

        {/* CTA superposé sur l'image – visible au survol */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-25">
          <Link
            to="/contact"
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Je veux le même résultat
          </Link>
        </div>

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

      {/* Texte + CTA */}
      <div
        className={`md:col-span-2 flex flex-col justify-center h-full ${
          reverse ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-natural-800 mb-3">{titre}</h3>
        <p className="text-natural-600 leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-3 mb-5">
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
        {/* CTA texte */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group transition-colors"
        >
          <span>Demander un devis pour ce type de projet</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
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

        {/* CTA Global de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-natural-800 mb-4">
            Prêt à transformer votre extérieur ?
          </h3>
          <p className="text-natural-500 mb-8 max-w-xl mx-auto">
            Comme ces clients, offrez-vous un jardin qui vous ressemble. Premier rendez-vous gratuit, devis sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                <span className="mr-2">📋</span> Demander mon devis gratuit
              </Button>
            </Link>
            <a
              href="https://wa.me/32494679682"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;