import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const quickLinks = ['Servicios', 'Portfolio', 'Nosotros', 'Contacto', 'Carreras'];
const hrefs: Record<string, string> = {
  Servicios: '#servicios', Portfolio: '#portfolio', Nosotros: '#nosotros', Contacto: '#contacto', Carreras: '#contacto',
};

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian border-t border-white/5">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.02) 0%, transparent 60%)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/santana-logo.png"
                alt="RDSS Santana Group"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="font-montserrat text-sm text-white/60 leading-relaxed mb-8 max-w-xs">
              Empresa especializada en construcción, arquitectura y diseño en República Dominicana. Transformamos visiones en realidades con excelencia.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-white/65 flex-shrink-0 mt-0.5" />
                <span className="font-montserrat text-xs text-white/60 leading-relaxed">
                  Av. Padre Abreu, La Romana, República Dominicana 22000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-white/65 flex-shrink-0" />
                <span className="font-montserrat text-xs text-white/60">+1 (809) 000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-white/65 flex-shrink-0" />
                <span className="font-montserrat text-xs text-white/60">info@santanagroup.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-offwhite mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(hrefs[link])}
                    className="font-montserrat text-sm text-white/60 hover:text-offwhite transition-colors duration-300 cursor-none flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-offwhite/40 transition-all duration-300 group-hover:w-4" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-offwhite mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {['Arquitectura & Diseño', 'Construcción & Obra', 'Project Management', 'RDSS Wood Design', 'Consultoría'].map((s) => (
                <li key={s}>
                  <span className="font-montserrat text-sm text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-offwhite/25 flex-shrink-0" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-offwhite mb-4">
                Síguenos
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/santanagroup0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 glass flex items-center justify-center text-white/60 hover:text-offwhite hover:border-white/20 transition-all duration-300 rounded-sm cursor-none"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="section-divider mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-montserrat text-xs text-white/50 tracking-widest text-center md:text-left">
            © 2025 RDSS Santana Group. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="font-montserrat text-xs text-white/50 hover:text-offwhite/70 transition-colors">
              Privacidad
            </Link>
            <Link to="/cookie-policy" className="font-montserrat text-xs text-white/50 hover:text-offwhite/70 transition-colors">
              Cookies
            </Link>
            <Link to="/termini-condizioni" className="font-montserrat text-xs text-white/50 hover:text-offwhite/70 transition-colors">
              Términos
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
