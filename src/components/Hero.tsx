import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Diamond, Layers, Ruler } from 'lucide-react';
import { MagneticButton } from './Navbar';

const floatingItems = [
  { Icon: Diamond, top: '22%', left: '8%', delay: '0s', size: 18 },
  { Icon: Layers, top: '58%', right: '10%', delay: '2s', size: 18 },
  { Icon: Ruler, bottom: '28%', left: '15%', delay: '4s', size: 18 },
];

const HERO_IMAGE = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=80';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.5}px)`;
      if (midRef.current) midRef.current.style.transform = `translateY(${y * 0.3}px)`;
      if (fgRef.current) fgRef.current.style.transform = `translateY(${y * 0.15}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <img
          src={HERO_IMAGE}
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div ref={midRef} className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/65 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/50" />

      <div
        ref={fgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 60%)`,
        }}
      />

      {floatingItems.map(({ Icon, top, left, right, bottom, delay, size }, i) => (
        <div
          key={i}
          className="floating-element absolute"
          style={{ top, left, right, bottom, animationDelay: delay }}
        >
          <Icon size={size} />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-offwhite/40" />
            <span className="font-montserrat text-xs font-medium tracking-[0.4em] uppercase text-offwhite/50">República Dominicana</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-playfair font-black leading-[0.9] tracking-tight text-offwhite mb-6 text-shadow-white"
            style={{ fontSize: 'clamp(42px, 6.5vw, 72px)' }}
          >
            CONSTRUIMOS
            <br />
            <span className="mono-gradient" style={{ display: 'block' }}>
              EL LUJO
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-montserrat text-offwhite/50 text-sm md:text-base tracking-[0.3em] uppercase mb-12"
          >
            50+ profesionales &nbsp;|&nbsp; 150+ proyectos completados &nbsp;|&nbsp; República Dominicana
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <MagneticButton
              onClick={() => {
                const el = document.querySelector('#contacto');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm px-8 py-4"
            >
              <span className="flex items-center gap-2">
                Inicia tu proyecto <ArrowRight size={14} />
              </span>
            </MagneticButton>

            <button
              onClick={() => {
                const el = document.querySelector('#portfolio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-offwhite/15 text-offwhite/60 font-montserrat text-xs tracking-[0.2em] uppercase hover:border-offwhite/40 hover:text-offwhite transition-all duration-300 cursor-none"
            >
              Ver Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => {
          const el = document.querySelector('#stats');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-offwhite/30 hover:text-offwhite/60 transition-colors cursor-none group"
      >
        <span className="font-montserrat text-xs tracking-[0.3em] uppercase">Descubrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
    </section>
  );
}
