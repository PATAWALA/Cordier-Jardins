import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const areas = [
  { name: 'Bruxelles-Capitale', icon: '🏛️' },
  { name: 'Brabant wallon', icon: '🏰' },
  { name: 'Brabant flamand', icon: '🌳' },
  { name: 'Hainaut', icon: '⛏️' },
  { name: 'Liège', icon: '🔥' },
  { name: 'Luxembourg', icon: '🌲' },
  { name: 'Namur', icon: '🏞️' },
  { name: 'Anvers', icon: '💎' },
  { name: 'Flandre orientale', icon: '🌷' },
  { name: 'Flandre occidentale', icon: '🏖️' },
];

const ServiceAreasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zones desservies – Cordier Jardins | Partout en Belgique</title>
        <meta name="description" content="Cordier Jardins intervient partout en Belgique : Bruxelles, Wallonie, Flandre. Demandez votre devis gratuit sous 48h." />
      </Helmet>

      {/* Section zones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Nous intervenons partout en Belgique"
            subtitle="De Bruxelles à Arlon, de Liège à Bruges, votre jardin nous attend."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            {areas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-natural-50 hover:bg-primary-50 rounded-xl p-5 text-center group transition-all duration-300 hover:shadow-md cursor-default"
              >
                <span className="text-3xl block mb-2">{area.icon}</span>
                <span className="text-natural-700 group-hover:text-primary-700 font-medium text-sm transition-colors">
                  {area.name}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-natural-500 mt-8 text-sm">
            Vous ne trouvez pas votre commune ? Contactez-nous, nous nous déplaçons dans toute la Belgique.
          </p>

          {/* CTA discret après la liste */}
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button variant="primary" size="md">
                <span className="mr-1.5">📍</span> Vérifier ma commune
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section réassurance */}
      <section className="py-20 bg-natural-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-natural-800 mb-4">
              Pourquoi nous faire confiance, où que vous soyez ?
            </h2>
            <p className="text-natural-500 mb-10 max-w-xl mx-auto">
              Quel que soit votre code postal, nous vous offrons le même service premium.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: '🚗', title: 'Déplacement inclus', text: 'Pas de frais cachés' },
                { icon: '⏱️', title: 'Ponctualité garantie', text: 'On arrive à l’heure' },
                { icon: '📋', title: 'Devis en 48h', text: 'Où que vous soyez' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-natural-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-natural-500">{item.text}</p>
                </motion.div>
              ))}
            </div>
            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  <span className="mr-2">📋</span> Demander mon devis gratuit
                </Button>
              </Link>
              <a href="tel:+32494679682">
                <Button variant="secondary" size="lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +32 494 67 96 82
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreasPage;