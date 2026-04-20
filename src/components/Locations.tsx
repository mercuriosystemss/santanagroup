import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

const locations = [
  { id: 1, name: 'Casa de Campo', desc: 'Villas y residencias ultra luxury', projects: 45, x: 68, y: 72 },
  { id: 2, name: 'Punta Cana', desc: 'Resorts y complejos hoteleros', projects: 38, x: 82, y: 58 },
  { id: 3, name: 'Bayahibe', desc: 'Boutique hotels y villas privadas', projects: 22, x: 72, y: 75 },
  { id: 4, name: 'Dominicus', desc: 'Resorts frente al mar', projects: 18, x: 74, y: 78 },
  { id: 5, name: 'La Romana', desc: 'Sede central y proyectos comerciales', projects: 32, x: 70, y: 74 },
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
      style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -100%)' }}
      onClick={onClick}
    >
      <div className="relative group">
        <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-lg ${isActive?'bg-gradient-to-br from-amber-400 to-amber-600 scale-110':'bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-amber-500/40 hover:border-amber-500/80 hover:scale-105'}`}>
          <MapPin size={16} className={isActive?'text-obsidian':'text-amber-400/90'}/>
          {!isActive&&(<><span className="absolute inset-0 rounded-full border-2 border-amber-500/60 animate-ping"/><span className="absolute inset-0 rounded-full bg-amber-500/20"/></>)}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 w-0.5 h-3 bg-gradient-to-b from-amber-500/80 to-transparent"/>
        <motion.div initial={{opacity:0,y:-8,scale:0.9}} animate={{opacity:isActive?1:0,y:isActive?-8:0,scale:isActive?1:0.9}} transition={{duration:0.25}} className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-52 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md border border-amber-500/30 rounded-sm p-4 pointer-events-none shadow-2xl" style={{zIndex:10}}>
          <div className="font-playfair font-bold text-offwhite text-sm mb-1">{loc.name}</div>
          <div className="font-montserrat text-offwhite/60 text-xs mb-3">{loc.desc}</div>
          <div className="flex items-center gap-2 pt-2 border-t border-offwhite/10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"/>
            <span className="font-montserrat text-amber-400/90 text-xs font-semibold">{loc.projects} proyectos</span>
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
              <div className="h-px w-8 bg-offwhite/30" />
              <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-offwhite/40">Presencia</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-offwhite mb-6">
              Donde<br />
              <span className="mono-gradient">Operamos</span>
            </h2>
            <p className="font-montserrat text-offwhite/50 text-sm leading-relaxed mb-8">
              Presentes en las zonas más exclusivas de República Dominicana, llevando excelencia a cada rincón del país.
            </p>

            <div className="space-y-3">
              {locations.map((loc, i) => (
                <motion.button
                  key={loc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  onClick={() => setActivePin(activePin === loc.id ? null : loc.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-sm border transition-all duration-300 cursor-none text-left ${
                    activePin === loc.id
                      ? 'border-offwhite/40 bg-white/5'
                      : 'border-offwhite/8 hover:border-offwhite/20 bg-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-offwhite/50" />
                    <div>
                      <div className={`font-montserrat text-sm font-semibold ${activePin === loc.id ? 'text-offwhite' : 'text-offwhite/70'}`}>
                        {loc.name}
                      </div>
                      <div className="font-montserrat text-xs text-offwhite/35">{loc.projects} proyectos</div>
                    </div>
                  </div>
                  <span className="font-montserrat text-xs text-offwhite/40">→</span>
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
            <div className="relative glass rounded-sm p-4 overflow-hidden" style={{ minHeight: '480px' }}>
              <svg viewBox="0 0 800 400" className="w-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="mapFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'rgba(255,255,255,0.12)',stopOpacity:1}}/>
                    <stop offset="100%" style={{stopColor:'rgba(255,255,255,0.06)',stopOpacity:1}}/>
                  </linearGradient>
                  <filter id="mapGlow">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                <path d="M 150,180 L 180,165 L 220,160 L 280,155 L 340,160 L 400,165 L 460,175 L 520,185 L 570,200 L 610,215 L 640,230 L 650,245 L 645,265 L 630,280 L 600,290 L 560,295 L 510,298 L 450,295 L 390,288 L 330,280 L 270,270 L 210,258 L 170,245 L 150,225 L 145,205 L 148,190 Z"
                      fill="url(#mapFill)"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="2"
                      filter="url(#mapGlow)"
                      opacity="0.9"/>

                <g opacity="0.15" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5">
                  <line x1="0" y1="100" x2="800" y2="100"/>
                  <line x1="0" y1="200" x2="800" y2="200"/>
                  <line x1="0" y1="300" x2="800" y2="300"/>
                  <line x1="200" y1="0" x2="200" y2="400"/>
                  <line x1="400" y1="0" x2="400" y2="400"/>
                  <line x1="600" y1="0" x2="600" y2="400"/>
                </g>
              </svg>

              <div className="absolute inset-0 p-4">
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

              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-sm px-4 py-3 flex items-center justify-between">
                  <span className="font-montserrat text-xs text-offwhite/40">República Dominicana</span>
                  <span className="font-montserrat text-xs text-offwhite/70 font-semibold">5 ubicaciones activas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
