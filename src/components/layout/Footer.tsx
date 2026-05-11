import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-natural-900 text-natural-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Colonne 1 - Logo & description */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-bold text-white">Cordier</span>
              <span className="text-2xl font-light text-natural-400">Jardins</span>
            </Link>
            <p className="text-sm leading-relaxed text-natural-400 mb-6 max-w-sm">
              Artisans paysagistes passionnés depuis 15 ans. Création, entretien, terrasse, clôture et aménagement extérieur partout en Belgique.
            </p>
            {/* Avis rapide */}
            <div className="flex items-center gap-2 text-sm text-natural-400">
              <div className="flex gap-0.5 text-primary-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>98% d'avis 5 étoiles</span>
            </div>
          </div>

          {/* Colonne 2 - Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/realisations" className="text-sm text-natural-400 hover:text-primary-400 transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-natural-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm text-natural-400 hover:text-primary-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/zones-desservies" className="text-sm text-natural-400 hover:text-primary-400 transition-colors">
                  Zones desservies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-natural-400 hover:text-primary-400 transition-colors">
                  Contact & Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Services */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-natural-400">Création de jardin</span></li>
              <li><span className="text-sm text-natural-400">Entretien régulier</span></li>
              <li><span className="text-sm text-natural-400">Terrasses & allées</span></li>
              <li><span className="text-sm text-natural-400">Clôtures</span></li>
              <li><span className="text-sm text-natural-400">Taille de haies</span></li>
              <li><span className="text-sm text-natural-400">Pelouse & gazon</span></li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-4">
              {/* Téléphone */}
              <a
                href="tel:+32494679682"
                className="flex items-center gap-3 text-sm text-natural-400 hover:text-primary-400 transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-natural-800 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-natural-500 mb-0.5">Téléphone</span>
                  <span className="font-medium text-white group-hover:text-primary-400 transition-colors">+32 494 67 96 82</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@cordierjardins.be"
                className="flex items-center gap-3 text-sm text-natural-400 hover:text-primary-400 transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-natural-800 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-natural-500 mb-0.5">Email</span>
                  <span className="font-medium text-white group-hover:text-primary-400 transition-colors">info@cordierjardins.be</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/32494679682"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-natural-400 hover:text-primary-400 transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-natural-800 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-natural-500 mb-0.5">WhatsApp</span>
                  <span className="font-medium text-white group-hover:text-green-400 transition-colors">Message instantané</span>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center gap-3 text-sm text-natural-400">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-natural-800 text-primary-400 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-natural-500 mb-0.5">Intervention</span>
                  <span className="font-medium text-white">Partout en Belgique</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-natural-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-natural-500 text-center sm:text-left">
            © {new Date().getFullYear()} Cordier Jardins – Tous droits réservés | BE0XXX.XXX.XXX
          </p>
          <div className="flex gap-4 text-xs text-natural-500">
            <Link to="/mentions-legales" className="hover:text-primary-400 transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-primary-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;