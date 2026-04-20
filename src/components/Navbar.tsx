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
            <img src="/santana-logo.svg" alt="RDSS Santana Group" className="h-20 w-auto brightness-0 invert opacity-95 group-hover:opacity-100 transition-all drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"/>
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
