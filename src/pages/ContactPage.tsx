import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    service: 'creation',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Envoyer les données (API, email, etc.)
    alert('Message envoyé (simulation)');
  };

  return (
    <>
      <Helmet>
        <title>Contact & Devis – Cordier Jardins | Paysagiste Belgique</title>
        <meta name="description" content="Contactez Cordier Jardins pour un devis gratuit de création, entretien, terrasse ou clôture. Réponse sous 48h." />
      </Helmet>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="Demandez votre devis gratuit"
            subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons sous 48h."
          />
          <motion.form
            onSubmit={handleSubmit}
            className="mt-12 bg-natural-50 p-8 md:p-12 rounded-2xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-natural-700 mb-1">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-natural-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-natural-700 mb-1">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-natural-700 mb-1">Service souhaité</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="creation">Création de jardin</option>
                  <option value="entretien">Entretien</option>
                  <option value="terrasse">Terrasse</option>
                  <option value="cloture">Clôture</option>
                  <option value="haies">Taille de haies</option>
                  <option value="pelouse">Pelouse</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-natural-700 mb-1">Votre projet</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                placeholder="Décrivez votre projet, vos envies..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
              Envoyer ma demande de devis
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;