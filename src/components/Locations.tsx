import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

const locations = [
  { id: 1, name: 'Casa de Campo', desc: 'Villas y residencias ultra luxury', projects: 45, x: 42, y: 58 },
  { id: 2, name: 'Punta Cana', desc: 'Resorts y complejos hoteleros', projects: 38, x: 72, y: 38 },
  { id: 3, name: 'Bayahibe', desc: 'Boutique hotels y villas privadas', projects: 22, x: 50, y: 65 },
  { id: 4, name: 'Dominicus', desc: 'Resorts frente al mar', projects: 18, x: 55, y: 72 },
  { id: 5, name: 'La Romana', desc: 'Sede central y proyectos comerciales', projects: 32, x: 46, y: 62 },
];

function LocationPin({ loc, index, isActive, onClick }: {
  loc: typeof locations[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, type: 'spring' }}
      className="absolute cursor-none"
      style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
      onClick={onClick}
    >
      <div className="relative group">
        <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
          isActive
            ? 'bg-white scale-125 shadow-[0_0_20px_rgba(255,255,255,0.4)]'
            : 'bg-black/70 border-2 border-white hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]'
        }`}>
          <MapPin size={18} className={isActive ? 'text-black' : 'text-white'} />
          {!isActive && (
            <span className="absolute inset-0 rounded-full border border-white/50 animate-ping" />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8, scale: isActive ? 1 : 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-44 pointer-events-none"
          style={{ zIndex: 20 }}
        >
          <div className="bg-black/90 border border-white/20 rounded-sm p-3 backdrop-blur-md">
            <div className="font-playfair font-bold text-white text-sm mb-0.5">{loc.name}</div>
            <div className="font-montserrat text-white/60 text-xs mb-1.5">{loc.desc}</div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span className="font-montserrat text-white/80 text-xs font-semibold">{loc.projects} proyectos</span>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0" style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid rgba(255,255,255,0.2)' }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Locations() {
  const [activePin, setActivePin] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="nosotros" className="relative py-28 bg-dark-surface">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 flex-shrink-0"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-white/30" />
              <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-white/60">Presencia</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Donde<br />
              <span className="mono-gradient">Operamos</span>
            </h2>
            <p className="font-montserrat text-white/60 text-sm leading-relaxed mb-8">
              Presentes en las zonas más exclusivas de República Dominicana, llevando excelencia a cada rincón del país.
            </p>

            <div className="space-y-2">
              {locations.map((loc, i) => (
                <motion.button
                  key={loc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  onClick={() => setActivePin(activePin === loc.id ? null : loc.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-sm border transition-all duration-300 cursor-none text-left ${
                    activePin === loc.id
                      ? 'border-white/50 bg-white/10'
                      : 'border-white/15 hover:border-white/35 bg-transparent hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className={activePin === loc.id ? 'text-white' : 'text-white/60'} />
                    <div>
                      <div className={`font-montserrat text-sm font-semibold ${activePin === loc.id ? 'text-white' : 'text-white/80'}`}>
                        {loc.name}
                      </div>
                      <div className="font-montserrat text-xs text-white/50">{loc.projects} proyectos</div>
                    </div>
                  </div>
                  <span className={`font-montserrat text-xs transition-colors ${activePin === loc.id ? 'text-white' : 'text-white/40'}`}>→</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative glass rounded-sm overflow-hidden" style={{ paddingBottom: '70%' }}>
              <div className="absolute inset-0 p-4">
                <svg viewBox="0 0 400 280" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="islandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Grid */}
                  <g opacity="0.2" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5">
                    <line x1="0" y1="70" x2="400" y2="70" />
                    <line x1="0" y1="140" x2="400" y2="140" />
                    <line x1="0" y1="210" x2="400" y2="210" />
                    <line x1="100" y1="0" x2="100" y2="280" />
                    <line x1="200" y1="0" x2="200" y2="280" />
                    <line x1="300" y1="0" x2="300" y2="280" />
                  </g>

                  {/* Dominican Republic island shape — centered, realistic proportions */}
                  <path
                    d="M80,100 L100,85 L130,78 L165,75 L200,72 L240,70 L275,74 L305,80 L325,90 L335,105 L338,120 L332,135 L320,148 L305,158 L285,165 L260,170 L235,172 L210,175 L185,178 L160,175 L135,168 L115,158 L95,145 L82,128 Z"
                    fill="url(#islandGrad)"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="2.5"
                    filter="url(#glow)"
                  />

                  {/* Interior region divisions */}
                  <path d="M80,100 L130,78 L165,75 L160,130 L120,140 L95,130 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                  <path d="M165,75 L240,70 L250,130 L200,138 L160,130 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                  <path d="M240,70 L325,90 L320,148 L270,165 L250,130 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                  <path d="M95,130 L160,130 L185,178 L135,168 L95,145 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <path d="M160,130 L250,130 L235,172 L185,178 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                  {/* Compass rose */}
                  <g transform="translate(360, 230)" opacity="0.5">
                    <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                    <line x1="0" y1="-12" x2="0" y2="12" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                    <line x1="-12" y1="0" x2="12" y2="0" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                    <text x="0" y="-15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="6" fontFamily="monospace">N</text>
                  </g>
                </svg>

                {/* Location pins — coordinates relative to the map container */}
                {locations.map((loc, i) => (
                  <LocationPin
                    key={loc.id}
                    loc={loc}
                    index={i}
                    isActive={activePin === loc.id}
                    onClick={() => setActivePin(activePin === loc.id ? null : loc.id)}
                  />
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="bg-black/60 border border-white/15 backdrop-blur-md rounded-sm px-4 py-2.5 flex items-center justify-between">
                  <span className="font-montserrat text-xs text-white/60">República Dominicana</span>
                  <span className="font-montserrat text-xs text-white font-semibold">5 ubicaciones activas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
