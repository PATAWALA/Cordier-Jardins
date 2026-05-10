import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';

const areas = [
  'Bruxelles-Capitale',
  'Brabant wallon',
  'Brabant flamand',
  'Hainaut',
  'Liège',
  'Luxembourg',
  'Namur',
  'Anvers',
  'Flandre orientale',
  'Flandre occidentale',
];

const ServiceAreasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zones desservies – Cordier Jardins | Partout en Belgique</title>
        <meta name="description" content="Cordier Jardins intervient partout en Belgique : Bruxelles, Wallonie, Flandre. Demandez votre devis gratuit." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Nous intervenons partout en Belgique"
            subtitle="De Bruxelles à Arlon, de Liège à Bruges, votre jardin nous attend."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            {areas.map((area) => (
              <div key={area} className="bg-natural-50 rounded-xl p-4 text-center text-natural-700 font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors cursor-default">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-natural-500 mt-8">
            Vous ne trouvez pas votre commune ? Contactez-nous, nous nous déplaçons dans toute la Belgique.
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceAreasPage;