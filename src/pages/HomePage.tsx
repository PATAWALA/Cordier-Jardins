import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import SocialProofSection from '../components/sections/SocialProofSection';
import BeforeAfterSection from '../components/sections/BeforeAfterSection';
import ServicesPreviewSection from '../components/sections/ServicesPreviewSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import QuickQuoteSection from '../components/sections/QuickQuoteSection';
import FaqSection from '../components/sections/FaqSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cordier Jardins | Paysagiste Premium en Belgique – Devis Gratuit</title>
        <meta name="description" content="Cordier Jardins, artisans paysagistes depuis 15 ans. Création, entretien, terrasse, clôture. Devis gratuit rapide partout en Belgique." />
        <meta property="og:title" content="Cordier Jardins | Paysagiste Belgique" />
        <meta property="og:description" content="Cordier Jardins, paysagistes passionnés. Devis gratuit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cordierjardins.be" />
        <meta property="og:image" content="https://www.cordierjardins.be/og-image.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cordier Jardins",
            "description": "Paysagiste en Belgique : création, entretien, terrasse, clôture.",
            "telephone": "+32470000000",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Belgique",
              "addressCountry": "BE"
            },
            "areaServed": ["Wallonie", "Bruxelles", "Flandre"],
            "openingHours": "Mo-Fr 08:00-18:00",
            "url": "https://www.cordierjardins.be",
            "image": "https://www.cordierjardins.be/logo.jpg"
          }
        `}</script>
      </Helmet>
      <HeroSection />
      <SocialProofSection />
      <BeforeAfterSection />
      <ServicesPreviewSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <QuickQuoteSection />
      <FaqSection />
    </>
  );
};

export default HomePage;