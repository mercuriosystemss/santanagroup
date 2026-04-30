import { useEffect, useRef } from 'react';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TerminiCondizioni from './pages/TerminiCondizioni';

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`;
        followerRef.current.style.top = `${followerPos.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{ transform: 'translate(-50%, -50%)', left: '-100px', top: '-100px' }}
      />
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{ transform: 'translate(-50%, -50%)', left: '-100px', top: '-100px' }}
      />
    </>
  );
}

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
