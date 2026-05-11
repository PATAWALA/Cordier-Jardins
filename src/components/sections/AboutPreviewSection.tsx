import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-xl group"
        >
          <img
            src="/images/equipe.jpg"
            alt="Les deux artisans paysagistes de Cordier Jardins en plein travail"
            className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow text-sm font-semibold text-natural-800">
            L'équipe Cordier
          </div>
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionHeading
            title="Une passion, deux artisans"
            subtitle="Derrière chaque jardin se cachent des hommes et un savoir-faire"
            centered={false}
          />
          <p className="text-natural-600 leading-relaxed mb-6">
            <strong>Cordier Jardins</strong>, c'est l'histoire de deux amis unis par l'amour du végétal. Depuis plus de 15 ans, nous concevons, rénovons et entretenons des espaces extérieurs à travers toute la Belgique. De la petite terrasse à la création complète d'un parc, nous mettons la même exigence artisanale au service de chaque projet.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1 bg-natural-100 text-natural-700 px-3 py-1.5 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Ponctualité
            </span>
            <span className="inline-flex items-center gap-1 bg-natural-100 text-natural-700 px-3 py-1.5 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Respect du budget
            </span>
            <span className="inline-flex items-center gap-1 bg-natural-100 text-natural-700 px-3 py-1.5 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Chantier propre
            </span>
          </div>

          {/* Double CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/a-propos">
              <Button variant="primary" size="md">
                Découvrir notre histoire
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="md">
                <span className="mr-1.5">📋</span> Contactez-nous
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;