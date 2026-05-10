import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'tous' | 'realisation' | 'equipe'; // 'realisation' sans 's' pour coller aux données

interface Project {
  id: number;
  title: string;
  description?: string;
  image: string;
  location: string;
  category: 'realisation' | 'equipe'; // projets finalisés ou équipe en action
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Jardin contemporain – Bruxelles',
    description: 'Création complète d’un espace de vie avec terrasse en bois, massifs et éclairage.',
    image: '/images/realisation1.jpg',
    location: 'Bruxelles',
    category: 'realisation',
  },
  {
    id: 2,
    title: 'Terrasse bois – Namur',
    description: 'Pose d’une terrasse en bois composite avec pergola végétalisée.',
    image: '/images/realisation2.jpg',
    location: 'Namur',
    category: 'realisation',
  },
  {
    id: 3,
    title: 'Clôture végétale – Liège',
    description: 'Installation d’une clôture en bois avec haies persistantes pour plus d’intimité.',
    image: '/images/realisation3.jpg',
    location: 'Liège',
    category: 'realisation',
  },
  {
    id: 4,
    title: 'Aménagement complet – Arlon',
    description: 'Reprise totale d’un terrain en pente avec murets, pelouse et plantations.',
    image: '/images/realisation4.jpg',
    location: 'Arlon',
    category: 'realisation',
  },
  {
    id: 6,
    title: 'Nivellement de précision – Namur',
    description: 'Préparation du sol avant engraisonnement.',
    image: '/images/action1.jpg',
    location: 'Namur',
    category: 'equipe',
  },
  {
    id: 7,
    title: 'Taille architecturale – Liège',
    description: 'Taille de haies et arbustes par notre artisan élagueur.',
    image: '/images/action2.jpg',
    location: 'Liège',
    category: 'equipe',
  },
  {
    id: 8,
    title: 'Maçonnerie paysagère – Bruxelles',
    description: 'Réalisation d’un muret en pierre sèche.',
    image: '/images/action3.jpg',
    location: 'Bruxelles',
    category: 'equipe',
  },
  {
    id: 9,
    title: 'Pose de gazon en rouleaux – Mons',
    description: 'Transformation express d’une pelouse en une journée.',
    image: '/images/action4.jpg',
    location: 'Mons',
    category: 'equipe',
  },
  {
    id: 10,
    title: 'Pose de gazon en rouleaux – Mons (2)',
    description: 'Autre exemple de pose express.',
    image: '/images/action5.jpg',
    location: 'Mons',
    category: 'equipe',
  },
];

const RealisationsPage: React.FC = () => {
  const [filter, setFilter] = useState<Category>('tous');
  const [lightboxOpen, setLightboxOpen] = useState<Project | null>(null);

  const filteredProjects = filter === 'tous'
    ? projects
    : projects.filter(p => p.category === filter);

  // Navigation dans la lightbox
  const currentIndex = lightboxOpen
    ? filteredProjects.findIndex(p => p.id === lightboxOpen.id)
    : -1;

  const goTo = (direction: 'prev' | 'next') => {
    if (currentIndex === -1 || filteredProjects.length === 0) return;
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredProjects.length
      : (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setLightboxOpen(filteredProjects[newIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Réalisations & Équipe en action – Cordier Jardins | Paysagiste Belgique</title>
        <meta name="description" content="Découvrez nos projets paysagers réalisés et notre équipe en plein travail. Terrasses, clôtures, jardins, pelouses en Belgique. Savoir-faire artisanal." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Nos réalisations & savoir-faire"
            subtitle="Des projets aboutis aux gestes de nos artisans, une passion visible à chaque étape"
          />

          {/* Filtres sophistiqués */}
          <div className="flex justify-center gap-3 mb-12">
            {([
              { key: 'tous' as Category, label: 'Tous' },
              { key: 'realisation' as Category, label: 'Projets réalisés' },  // clé corrigée
              { key: 'equipe' as Category, label: "L'équipe en action" },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === key
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 scale-105'
                    : 'bg-natural-50 text-natural-700 hover:bg-natural-100 border border-natural-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grille des projets */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white relative"
                  onClick={() => setLightboxOpen(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Badge */}
                    <span
                      className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm ${
                        project.category === 'realisation'
                          ? 'bg-primary-500/90 text-white'
                          : 'bg-amber-500/90 text-white'
                      }`}
                    >
                      {project.category === 'realisation' ? 'Réalisé' : 'En action'}
                    </span>
                    {/* Overlay au survol (desktop) */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        Voir en grand
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-natural-800 mb-1">{project.title}</h3>
                    <div className="flex items-center text-sm text-natural-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                    {project.description && (
                      <p className="mt-2 text-sm text-natural-500 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Aucun projet */}
          {filteredProjects.length === 0 && (
            <p className="text-center text-natural-400 mt-8">Aucun projet dans cette catégorie pour le moment.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(null)}
          >
            <div className="relative max-w-4xl max-h-full w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxOpen.image}
                alt={lightboxOpen.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 backdrop-blur-md rounded-lg px-4 py-3">
                <h3 className="font-semibold text-lg">{lightboxOpen.title}</h3>
                <p className="text-sm opacity-80">{lightboxOpen.description}</p>
              </div>
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 rounded-full p-2"
                onClick={() => setLightboxOpen(null)}
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {filteredProjects.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 rounded-full p-3"
                    onClick={() => goTo('prev')}
                    aria-label="Précédent"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 rounded-full p-3"
                    onClick={() => goTo('next')}
                    aria-label="Suivant"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RealisationsPage;