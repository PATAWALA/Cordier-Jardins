import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const QuickQuoteSection: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi – à remplacer par un vrai endpoint
    alert('Message envoyé (simulation)');
  };

  return (
    <section className="py-20 bg-primary-600 bg-[url('/pattern.svg')] bg-cover bg-center text-white" id="devis">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading
          title="Obtenez votre devis gratuit en 48h"
          subtitle="Décrivez votre projet, nous vous répondons rapidement"
        />
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-white/90">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Jean Dupont"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-white/90">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="+32 470 00 00 00"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-white/90">
              Votre projet
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Décrivez votre projet en quelques mots..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button type="submit" variant="secondary" className="w-full sm:w-auto bg-white text-primary-700 hover:bg-gray-100">
              Envoyer ma demande
            </Button>
            <p className="text-sm text-white/70">
              Ou appelez-nous au <a href="tel:+32470000000" className="underline">+32 470 00 00 00</a>
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default QuickQuoteSection;