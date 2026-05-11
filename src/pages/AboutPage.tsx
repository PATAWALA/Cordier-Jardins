import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import StarRating from '../components/ui/StarRating';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>À propos – Cordier Jardins | Artisans paysagistes en Belgique</title>
        <meta name="description" content="Cordier Jardins, deux paysagistes passionnés à votre service partout en Belgique. Création et entretien de jardins depuis 15 ans. Devis gratuit sous 48h." />
      </Helmet>

      {/* Section principale */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Qui sommes-nous ?"
              subtitle="Deux artisans, une passion commune pour le végétal"
              centered={false}
            />
            <p className="text-natural-600 leading-relaxed mb-6">
              Cordier Jardins est né de la volonté de deux amis d'enfance de redonner vie aux jardins belges. Depuis plus de 15 ans, nous mettons notre savoir-faire au service des particuliers et des entreprises, avec la même exigence pour un petit entretien que pour la création complète d'un espace vert.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={5} />
              <span className="text-natural-600 text-sm font-medium">98 % d'avis 5 étoiles</span>
            </div>
            <p className="text-natural-600 mb-6">
              <strong>Nos valeurs :</strong> ponctualité, respect du budget, conseil personnalisé et propreté du chantier.
            </p>
            {/* CTA dans le texte */}
            <Link to="/contact">
              <Button variant="primary" size="md">
                <span className="mr-1.5">📋</span> Demander un devis gratuit
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/images/equipe.jpg"
              alt="L'équipe Cordier Jardins – Paysagistes en Belgique"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-xl shadow-lg">
              <span className="text-sm font-bold">Depuis 2009</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section valeurs */}
      <section className="py-20 bg-natural-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Nos engagements"
            subtitle="Ce qui fait la différence Cordier Jardins"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: '🛡️',
                title: 'Assurance professionnelle',
                text: 'Tous nos chantiers sont couverts par une assurance responsabilité civile professionnelle.',
              },
              {
                icon: '📅',
                title: 'Respect des délais',
                text: 'Nous nous engageons sur un planning précis et vous tenons informés à chaque étape.',
              },
              {
                icon: '🧹',
                title: 'Chantier propre',
                text: 'Nous nettoyons systématiquement le chantier en fin de journée. Votre tranquillité avant tout.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-natural-800 mb-3">{value.title}</h3>
                <p className="text-natural-500 text-sm leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêts à donner vie à votre projet ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Confiez-nous votre jardin, nous le transformerons avec passion et savoir-faire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                  <span className="mr-2">📋</span> Devis gratuit
                </Button>
              </Link>
              <Link to="/realisations">
                <Button variant="outline" size="lg">
                  <span className="mr-2">🖼️</span> Voir nos réalisations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;