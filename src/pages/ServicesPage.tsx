import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { servicesList } from '../data/services';
import Button from '../components/ui/Button';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services – Cordier Jardins | Création, Entretien, Terrasse, Clôture</title>
        <meta name="description" content="Cordier Jardins propose : création de jardin, entretien, terrasse, clôture, taille de haies, pelouse. Devis gratuit en Belgique." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Nos services paysagers"
            subtitle="Une gamme complète pour votre extérieur"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {servicesList.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-natural-50 p-8 rounded-2xl hover:bg-primary-50 transition-colors shadow-sm"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-natural-800 mb-3">{service.title}</h2>
                <p className="text-natural-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/contact" variant="primary" size="lg">Demander un devis gratuit</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;