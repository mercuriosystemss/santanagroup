import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setVisible(currentY < lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark py-2' : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center gap-3 group">
            <svg width="60" height="60" viewBox="0 0 100 100" className="transition-all duration-500 drop-shadow-[0_0_12px_rgba(196,166,118,0.4)] group-hover:drop-shadow-[0_0_24px_rgba(196,166,118,0.6)]">
              <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(196,166,118,0.3)" strokeWidth="1"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(196,166,118,0.5)" strokeWidth="0.5"/>
              <g opacity="0.95">
                <circle cx="50" cy="30" r="6" fill="#C4A676"/>
                <circle cx="50" cy="30" r="11" fill="none" stroke="#C4A676" strokeWidth="1.5"/>
                <circle cx="50" cy="30" r="16" fill="none" stroke="#C4A676" strokeWidth="0.8" opacity="0.6"/>
                <path d="M35 45 L50 35 L65 45 L50 55 Z" fill="#8B7355" opacity="0.8"/>
                <path d="M35 60 L50 50 L65 60 L50 70 Z" fill="#6B5745" opacity="0.9"/>
              </g>
              <text x="50" y="88" fontFamily="serif" fontSize="9" fontWeight="700" fill="#F5F5F0" textAnchor="middle" letterSpacing="1">RDSS</text>
              <text x="50" y="96" fontFamily="sans-serif" fontSize="5" fill="#C4A676" textAnchor="middle" letterSpacing="2">SANTANA GROUP</text>
            </svg>
            <div className="flex flex-col">
              <span className="font-playfair text-offwhite text-lg font-bold tracking-tight leading-none">RDSS</span>
              <span className="font-montserrat text-offwhite/50 text-[9px] tracking-[0.3em] uppercase leading-none">Santana Group</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-montserrat text-xs font-medium tracking-[0.2em] uppercase text-offwhite/60 hover:text-offwhite transition-colors duration-300 relative group cursor-none"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-offwhite/60 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton onClick={() => handleNavClick('#contacto')}>
              Consulta Gratis
            </MagneticButton>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-offwhite hover:text-white-soft transition-colors cursor-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-offwhite hover:text-white cursor-none">
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavClick(link.href)}
                className="font-playfair text-3xl text-offwhite/70 hover:text-offwhite transition-colors cursor-none"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <button
                onClick={() => handleNavClick('#contacto')}
                className="mt-4 px-8 py-3 border border-offwhite/30 text-offwhite font-montserrat text-sm tracking-widest uppercase hover:bg-offwhite hover:text-obsidian transition-all duration-300 cursor-none"
              >
                Consulta Gratis
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function MagneticButton({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0, 0)';
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative px-6 py-2.5 border border-offwhite/30 text-offwhite font-montserrat text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-offwhite hover:text-obsidian hover:border-offwhite cursor-none ${className}`}
    >
      {children}
    </button>
  );
}
