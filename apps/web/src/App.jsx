import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import Games from './pages/Games.jsx';
import About from './pages/About.jsx';
import Culture from './pages/Culture.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" theme="dark" richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;