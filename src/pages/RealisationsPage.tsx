import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'tous' | 'realisation' | 'equipe';

interface Project {
  id: number;
  title: string;
  description?: string;
  image: string;
  location: string;
  category: 'realisation' | 'equipe';
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

          {/* Filtres */}
          <div className="flex justify-center gap-3 mb-12">
            {([
              { key: 'tous' as Category, label: 'Tous' },
              { key: 'realisation' as Category, label: 'Projets réalisés' },
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
                  className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white relative"
                >
                  <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(project)}>
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
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                      <button
                        className="text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxOpen(project);
                        }}
                      >
                        🔍 Voir en grand
                      </button>
                      {project.category === 'realisation' && (
                        <Link
                          to="/contact"
                          className="text-white text-sm font-semibold bg-primary-500/90 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-primary-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          📋 Je veux le même
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-natural-800 mb-1">{project.title}</h3>
                    <div className="flex items-center text-sm text-natural-500 mb-2">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                    {project.description && (
                      <p className="text-sm text-natural-500 leading-relaxed line-clamp-2 mb-3">
                        {project.description}
                      </p>
                    )}
                    {/* CTA dans la carte pour projets réalisés */}
                    {project.category === 'realisation' && (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors group/link"
                      >
                        <span>Demander un devis similaire</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-natural-400 mt-8">Aucun projet dans cette catégorie pour le moment.</p>
          )}

          {/* CTA Global */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-natural-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-natural-800 mb-3">
              Prêt à avoir le jardin de vos rêves ?
            </h3>
            <p className="text-natural-500 mb-6 max-w-lg mx-auto">
              Comme ces clients, offrez-vous un extérieur qui vous ressemble. Devis gratuit en 48h.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                <span className="mr-2">📋</span> Demander mon devis gratuit
              </Button>
            </Link>
          </motion.div>
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
              {/* Infos + CTA dans la lightbox */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white bg-black/50 backdrop-blur-md rounded-lg px-5 py-4">
                <div>
                  <h3 className="font-semibold text-lg">{lightboxOpen.title}</h3>
                  <p className="text-sm opacity-80">{lightboxOpen.description}</p>
                </div>
                {lightboxOpen.category === 'realisation' && (
                  <Link
                    to="/contact"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap text-sm"
                  >
                    📋 Je veux le même
                  </Link>
                )}
              </div>
              {/* Fermer */}
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 rounded-full p-2"
                onClick={() => setLightboxOpen(null)}
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Navigation */}
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