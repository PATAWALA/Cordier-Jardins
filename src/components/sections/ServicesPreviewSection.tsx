import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { servicesList } from '../../data/services';

const ServicesPreviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Nos services paysagers"
          subtitle="Expertise complète pour votre extérieur, de la conception à l’entretien"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-natural-50 rounded-2xl hover:bg-primary-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-natural-800 mb-2">{service.title}</h3>
              <p className="text-natural-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="secondary">Voir tous nos services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviewSection;