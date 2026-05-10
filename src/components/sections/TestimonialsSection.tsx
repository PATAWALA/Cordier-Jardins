import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import StarRating from '../ui/StarRating';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-natural-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Ce que nos clients disent"
          subtitle="La satisfaction de nos clients est notre plus belle récompense."
        />
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-center"
            >
              <StarRating rating={testimonials[current].rating} />
              <blockquote className="text-lg md:text-xl text-natural-700 italic mt-6 mb-8 leading-relaxed">
                “{testimonials[current].text}”
              </blockquote>
              <div className="text-natural-800 font-semibold">{testimonials[current].name}</div>
              <div className="text-natural-500 text-sm">{testimonials[current].location}</div>
            </motion.div>
          </AnimatePresence>

          {/* Contrôles */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white border border-natural-200 hover:border-primary-400 transition-colors"
              aria-label="Avis précédent"
            >
              <svg className="w-5 h-5 text-natural-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white border border-natural-200 hover:border-primary-400 transition-colors"
              aria-label="Avis suivant"
            >
              <svg className="w-5 h-5 text-natural-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;