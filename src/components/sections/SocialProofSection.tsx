import { motion } from 'framer-motion';

const stats = [
  { label: 'Projets réalisés', value: '240+' },
  { label: "Années d'expérience", value: '15' },
  { label: 'Avis 5 étoiles', value: '98%' },
  { label: 'Villes desservies', value: '50+' },
];

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 bg-natural-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white rounded-2xl shadow-sm"
          >
            <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
            <div className="text-sm text-natural-500 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;