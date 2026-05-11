import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const QuickQuoteSection: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Remplacer par l'envoi réel (API, email, etc.)
  };

  // Réinitialiser le formulaire
  const handleReset = () => {
    setForm({ name: '', phone: '', message: '' });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="py-20 bg-primary-600" id="devis">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl md:text-3xl font-bold text-natural-800 mb-3">
              Demande envoyée avec succès !
            </h2>
            <p className="text-natural-600 mb-6">
              Nous vous répondrons sous 48h au <strong>{form.phone}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm underline"
            >
              Envoyer une autre demande
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary-700 relative overflow-hidden" id="devis">
      {/* Fond décoratif */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* En-tête avec meilleure lisibilité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            ⚡ Réponse sous 48h
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Obtenez votre devis gratuit
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto font-light">
            Décrivez votre projet en quelques mots, nous vous répondons avec une proposition détaillée.
          </p>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/15 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1.5 text-white">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                placeholder="Jean Dupont"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1.5 text-white">
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                placeholder="+32 494 67 96 82"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-1.5 text-white">
              Votre projet
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
              placeholder="Décrivez votre projet en quelques mots..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>

          {/* Bouton + réassurance */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              type="submit"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-primary-700 hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <span className="mr-2">📋</span> Envoyer ma demande
            </Button>
            <div className="text-sm text-white/80 text-center sm:text-left">
              <p>
                Ou appelez-nous au{' '}
                <a href="tel:+32494679682" className="text-white font-bold underline hover:text-primary-200 transition-colors">
                  +32 494 67 96 82
                </a>
              </p>
            </div>
          </div>

          {/* Réassurance */}
          <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4 text-center text-xs text-white/70">
            <div className="flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Devis gratuit & sans engagement
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Réponse garantie sous 48h
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default QuickQuoteSection;