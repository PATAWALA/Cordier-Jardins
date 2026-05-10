import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import RealisationsPage from './pages/RealisationsPage';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Layout>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/zones-desservies" element={<ServiceAreasPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;