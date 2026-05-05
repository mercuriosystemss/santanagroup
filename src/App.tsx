import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Locations from './components/Locations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookieBar from './components/CookieBar';
import CustomCursor from './components/CustomCursor';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TerminiCondizioni from './pages/TerminiCondizioni';

function HomePage() {
  return (
    <div className="bg-obsidian text-offwhite overflow-x-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Locations />
        <ContactForm />
      </main>
      <Footer />
      <CookieBar />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-cookies" element={<CookiePolicy />} />
        <Route path="/terminos-condiciones" element={<TerminiCondizioni />} />
      </Routes>
    </BrowserRouter>
  );
}
