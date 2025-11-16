import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';
import Newsletter from './components/ui/Newsletter';
import ScrollToTop from './components/ui/ScrollToTop';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const CampaignsPage = React.lazy(() => import('./pages/CampaignsPage'));
const CampaignDetailPage = React.lazy(() => import('./pages/CampaignDetailPage'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/campaigns" element={<CampaignsPage />} />
                <Route path="/campaigns/:id" element={<CampaignDetailPage />} />
              </Routes>
            </Suspense>
          </main>
          <Newsletter />
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;