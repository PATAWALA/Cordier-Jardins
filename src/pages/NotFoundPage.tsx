import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-8xl font-bold text-primary-500">404</h1>
        <h2 className="text-3xl font-bold text-natural-800 mt-4">Page introuvable</h2>
        <p className="text-natural-500 mt-4 mb-8">
          Oups, cette page n’existe pas ou a été déplacée. Retournez à l’accueil ou contactez-nous.
        </p>
        <div className="flex justify-center gap-4">
          <Button to="/" variant="primary">Retour à l'accueil</Button>
          <Button to="/contact" variant="secondary">Contactez-nous</Button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;