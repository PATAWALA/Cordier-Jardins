import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const reasons = [
  {
    title: 'Expertise artisanale',
    description: 'Plus de 15 ans d’expérience, chaque projet est traité avec le même souci du détail.',
    icon: '🌿',
  },
  {
    title: 'Devis transparent',
    description: 'Devis gratuit sous 48h, sans surprise. Vous savez exactement ce que vous payez.',
    icon: '📋',
  },
  {
    title: 'Satisfaction garantie',
    description: '98 % de clients nous attribuent 5 étoiles. "Satisfait ou refait" est notre devise.',
    icon: '⭐',
  },
  {
    title: 'Showroom vivant',
    description: 'Nos réalisations parlent pour nous. Visitez notre portfolio ou nos chantiers en cours.',
    icon: '📸',
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Pourquoi choisir Cordier Jardins ?"
          subtitle="L’excellence à chaque étape, du premier appel à la dernière plante."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-natural-800 mb-3">{reason.title}</h3>
              <p className="text-natural-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;