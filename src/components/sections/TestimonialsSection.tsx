import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import StarRating from '../ui/StarRating';
import Button from '../ui/Button';
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
          {/* Indicateur de progression */}
          <div className="flex justify-center gap-2 mb-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === current ? 'w-8 bg-primary-500' : 'w-4 bg-natural-300 hover:bg-natural-400'
                }`}
                aria-label={`Avis ${idx + 1}`}
              />
            ))}
          </div>

          {/* Carte témoignage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg relative"
            >
              {/* Guillemets décoratifs */}
              <div className="absolute top-4 left-6 text-6xl text-primary-200 leading-none select-none">
                “
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg flex-shrink-0">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-natural-800">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-natural-500 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {testimonials[current].location}
                    </div>
                  </div>
                </div>

                <StarRating rating={testimonials[current].rating} />

                <blockquote className="text-lg md:text-xl text-natural-700 italic mt-4 mb-6 leading-relaxed">
                  “{testimonials[current].text}”
                </blockquote>

                {/* Mini CTA après l'avis */}
                <div className="pt-4 border-t border-natural-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors group"
                  >
                    <span>Faites comme {testimonials[current].name.split(' ')[0]}, demandez votre devis</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-natural-200 hover:border-primary-400 hover:shadow-md transition-all"
              aria-label="Avis précédent"
            >
              <svg className="w-5 h-5 text-natural-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-sm text-natural-400 font-medium">
              {current + 1} / {testimonials.length}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-natural-200 hover:border-primary-400 hover:shadow-md transition-all"
              aria-label="Avis suivant"
            >
              <svg className="w-5 h-5 text-natural-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Global */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/contact">
            <Button variant="primary" size="md">
              <span className="mr-1.5">📋</span> Rejoignez nos clients satisfaits
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;