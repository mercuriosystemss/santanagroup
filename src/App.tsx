import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>RDSS Santana Group - Arquitectura, Construcción y Diseño de Muebles | La Romana, RD</title>
        <meta name="description" content="Empresa líder en arquitectura, construcción y diseño de muebles a medida en La Romana, República Dominicana. Transformamos espacios con elegancia y funcionalidad desde 1987." />
        <meta name="keywords" content="arquitectura La Romana, construcción República Dominicana, diseño de muebles, muebles a medida, carpintería lujo, RDSS Santana Group, Bayahíbe, Punta Cana" />
        <link rel="canonical" href="https://rdsssantanagroup.com/" />
        <meta property="og:title" content="RDSS Santana Group - Arquitectura y Diseño de Lujo" />
        <meta property="og:description" content="Arquitectura, construcción y diseño de muebles de lujo en La Romana, República Dominicana." />
        <meta property="og:image" content="https://rdsssantanagroup.com/og-image.jpg" />
        <meta property="og:url" content="https://rdsssantanagroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_DO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RDSS Santana Group - Arquitectura y Diseño" />
        <meta name="twitter:description" content="Arquitectura, construcción y diseño de muebles de lujo en La Romana." />
        <meta name="twitter:image" content="https://rdsssantanagroup.com/og-image.jpg" />
      </Helmet>
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
    </>
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
