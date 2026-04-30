import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'santana_cookie_consent';

type ConsentLevel = 'all' | 'necessary' | null;

interface CookiePrefs {
  level: ConsentLevel;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBar() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (level: ConsentLevel, overridePrefs?: Partial<CookiePrefs>) => {
    const data: CookiePrefs = {
      level,
      analytics: level === 'all' ? true : (overridePrefs?.analytics ?? prefs.analytics),
      marketing: level === 'all' ? true : (overridePrefs?.marketing ?? prefs.marketing),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[200]"
          role="dialog"
          aria-label="Consentimiento de cookies"
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-xl border-t border-white/10" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <Cookie size={16} className="text-white/50 flex-shrink-0 mt-0.5" />
                <p className="font-montserrat text-sm text-white/75 leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia. Al continuar navegando aceptas nuestra{' '}
                  <Link
                    to="/politica-cookies"
                    className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
                  >
                    Política de Cookies
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-1.5 font-montserrat text-xs text-white/55 hover:text-white/80 transition-colors cursor-none px-1"
                >
                  Personalizar
                  {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                </button>

                <button
                  onClick={() => save('necessary')}
                  className="font-montserrat text-xs tracking-widest uppercase px-5 py-2.5 border border-white/30 text-white/75 hover:border-white/60 hover:text-white transition-all duration-300 cursor-none"
                >
                  Solo necesarias
                </button>

                <button
                  onClick={() => save('all')}
                  className="font-montserrat text-xs tracking-widest uppercase px-5 py-2.5 bg-white text-black hover:bg-white/90 transition-all duration-300 cursor-none font-semibold"
                >
                  Aceptar todas
                </button>

                <button
                  onClick={() => save('necessary')}
                  aria-label="Cerrar"
                  className="text-white/40 hover:text-white/70 transition-colors cursor-none ml-1"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-5 mt-4 border-t border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                      <div className="flex items-start justify-between gap-3 p-3 border border-white/10 rounded-sm bg-white/3">
                        <div>
                          <div className="font-montserrat text-xs font-semibold text-white mb-1">Necesarias</div>
                          <p className="font-montserrat text-xs text-white/50">Esenciales para el funcionamiento del sitio.</p>
                        </div>
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-9 h-5 bg-white/30 rounded-full flex items-center justify-end px-0.5 opacity-50">
                            <div className="w-4 h-4 bg-white rounded-full" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start justify-between gap-3 p-3 border border-white/10 rounded-sm bg-white/3">
                        <div>
                          <div className="font-montserrat text-xs font-semibold text-white mb-1">Analíticas</div>
                          <p className="font-montserrat text-xs text-white/50">Estadísticas anónimas de uso del sitio.</p>
                        </div>
                        <button
                          onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                          className={`flex-shrink-0 mt-0.5 w-9 h-5 rounded-full flex items-center transition-all duration-300 px-0.5 cursor-none ${
                            prefs.analytics ? 'bg-white justify-end' : 'bg-white/20 justify-start'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full transition-colors ${prefs.analytics ? 'bg-black' : 'bg-white/60'}`} />
                        </button>
                      </div>

                      <div className="flex items-start justify-between gap-3 p-3 border border-white/10 rounded-sm bg-white/3">
                        <div>
                          <div className="font-montserrat text-xs font-semibold text-white mb-1">Marketing</div>
                          <p className="font-montserrat text-xs text-white/50">Contenido personalizado y publicidad.</p>
                        </div>
                        <button
                          onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                          className={`flex-shrink-0 mt-0.5 w-9 h-5 rounded-full flex items-center transition-all duration-300 px-0.5 cursor-none ${
                            prefs.marketing ? 'bg-white justify-end' : 'bg-white/20 justify-start'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full transition-colors ${prefs.marketing ? 'bg-black' : 'bg-white/60'}`} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => save('necessary', prefs)}
                      className="font-montserrat text-xs tracking-widest uppercase px-6 py-2.5 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-none"
                    >
                      Guardar preferencias
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
