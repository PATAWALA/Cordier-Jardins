import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import StarRating from '../components/ui/StarRating';


const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>À propos – Cordier Jardins | Artisans paysagistes en Belgique</title>
        <meta name="description" content="Cordier Jardins, deux paysagistes passionnés à votre service partout en Belgique. Création et entretien de jardins depuis 15 ans." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Qui sommes-nous ?"
              subtitle="Deux artisans, une passion commune pour le végétal"
              centered={false}
            />
            <p className="text-natural-600 leading-relaxed mb-6">
              Cordier Jardins est né de la volonté de deux amis d’enfance de redonner vie aux jardins belges. Depuis plus de 15 ans, nous mettons notre savoir-faire au service des particuliers et des entreprises, avec la même exigence pour un petit entretien que pour la création complète d’un espace vert.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={5} />
              <span className="text-natural-600 text-sm">98 % d'avis 5 étoiles</span>
            </div>
            <p className="text-natural-600">
              <strong>Nos valeurs :</strong> ponctualité, respect du budget, conseil personnalisé et propreté du chantier.
            </p>
          </div>
          <div>
            <img
              src="/images/equipe.jpg"
              alt="L'équipe Cordier Jardins"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;