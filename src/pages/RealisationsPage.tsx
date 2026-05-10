import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';

const projects = [
  { id: 1, title: 'Jardin contemporain – Bruxelles', image: '/realisations/jardin1.jpg' },
  { id: 2, title: 'Terrasse bois – Namur', image: '/realisations/terrasse.jpg' },
  { id: 3, title: 'Clôture végétale – Liège', image: '/realisations/cloture.jpg' },
  { id: 4, title: 'Aménagement complet – Arlon', image: '/realisations/amenagement.jpg' },
  { id: 5, title: 'Taille de haies – Charleroi', image: '/realisations/haies.jpg' },
  { id: 6, title: 'Pelouse parfaite – Mons', image: '/realisations/pelouse.jpg' },
];

const RealisationsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Réalisations – Cordier Jardins | Paysagiste Belgique</title>
        <meta name="description" content="Découvrez les plus belles créations de paysage de Cordier Jardins. Terrasses, clôtures, jardins, pelouses en Belgique." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Nos réalisations"
            subtitle="Quelques-uns de nos projets à travers la Belgique."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-natural-800">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RealisationsPage;