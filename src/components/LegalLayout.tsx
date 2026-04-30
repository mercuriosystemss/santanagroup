import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUp, ChevronRight } from 'lucide-react';
import Footer from './Footer';

const LEGAL_LABELS: Record<string, string> = {
  '/politica-privacidad': 'Política de Privacidad',
  '/politica-cookies': 'Política de Cookies',
  '/terminos-condiciones': 'Términos y Condiciones',
};

interface Section {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
  sections?: Section[];
}

export default function LegalLayout({ title, subtitle, lastUpdated, children, sections }: LegalLayoutProps) {
  const { pathname } = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="bg-obsidian text-offwhite min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-obsidian/95 backdrop-blur-md border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/santana-logo.png"
              alt="RDSS Santana Group"
              className="h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 font-montserrat text-xs text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Volver al sitio
          </Link>
        </div>
      </header>

      <div className="relative border-b border-white/8 py-14 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)' }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 mb-6">
            <Link to="/" className="font-montserrat text-xs text-white/45 hover:text-white/70 transition-colors">
              Inicio
            </Link>
            <ChevronRight size={11} className="text-white/30" />
            <span className="font-montserrat text-xs text-white/70">{LEGAL_LABELS[pathname] || title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-white/30" />
              <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-white/50">Legal</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3">{title}</h1>
            <p className="font-montserrat text-sm text-white/55">{subtitle}</p>
            <p className="font-montserrat text-xs text-white/35 mt-2">Última actualización: {lastUpdated}</p>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto px-6 lg:px-10 py-16 w-full">
        <div className="flex gap-14">
          {sections && sections.length > 0 && (
            <aside className="hidden xl:block w-52 flex-shrink-0">
              <div className="sticky top-24">
                <p className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-4">Contenido</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block font-montserrat text-xs text-white/50 hover:text-white/85 transition-colors py-1 pl-3 border-l border-white/10 hover:border-white/35"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-1">
                  <p className="font-montserrat text-xs text-white/35 mb-2">Otras páginas legales</p>
                  {Object.entries(LEGAL_LABELS)
                    .filter(([path]) => path !== pathname)
                    .map(([path, label]) => (
                      <Link
                        key={path}
                        to={path}
                        className="block font-montserrat text-xs text-white/45 hover:text-white/75 transition-colors py-0.5"
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          )}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 min-w-0 legal-content"
          >
            {children}
          </motion.article>
        </div>
      </div>

      <Footer />

      <motion.button
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        onClick={scrollTop}
        className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-white/85 transition-colors cursor-none shadow-lg"
        aria-label="Volver arriba"
        style={{ pointerEvents: showTop ? 'auto' : 'none' }}
      >
        <ArrowUp size={16} />
      </motion.button>
    </div>
  );
}
