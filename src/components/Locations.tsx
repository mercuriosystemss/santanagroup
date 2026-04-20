import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

const locations = [
  { id: 1, name: 'Casa de Campo', desc: 'Villas y residencias ultra luxury', projects: 45, x: 52, y: 62 },
  { id: 2, name: 'Punta Cana', desc: 'Resorts y complejos hoteleros', projects: 38, x: 78, y: 48 },
  { id: 3, name: 'Bayahibe', desc: 'Boutique hotels y villas privadas', projects: 22, x: 60, y: 68 },
  { id: 4, name: 'Dominicus', desc: 'Resorts frente al mar', projects: 18, x: 65, y: 72 },
  { id: 5, name: 'La Romana', desc: 'Sede central y proyectos comerciales', projects: 32, x: 56, y: 65 },
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
        <div className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          isActive ? 'bg-offwhite' : 'bg-dark-surface border-2 border-offwhite/30 hover:border-offwhite/60'
        }`}>
          <MapPin size={14} className={isActive ? 'text-obsidian' : 'text-offwhite/60'} />
          {!isActive && (
            <span className="absolute inset-0 rounded-full border border-offwhite/20 animate-ping" />
          )}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-1.5 h-1.5 rounded-full bg-offwhite/50" />

        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.9 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? -8 : 0, scale: isActive ? 1 : 0.9 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 glass rounded-sm p-4 pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <div className="font-playfair font-bold text-offwhite text-sm mb-1">{loc.name}</div>
          <div className="font-montserrat text-offwhite/50 text-xs mb-2">{loc.desc}</div>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-offwhite/50" />
            <span className="font-montserrat text-offwhite/70 text-xs font-semibold">{loc.projects} proyectos</span>
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
              <svg
                viewBox="0 0 200 140"
                className="w-full opacity-15"
                style={{ fill: 'rgba(255,255,255,0.08)', stroke: 'rgba(255,255,255,0.2)', strokeWidth: '0.5' }}
              >
                <path d="M60,20 L80,15 L100,18 L130,12 L160,20 L175,35 L180,55 L170,70 L165,85 L150,95 L130,100 L110,110 L90,115 L70,110 L55,100 L45,85 L40,65 L45,45 Z" />
                <path d="M60,20 L80,15 L100,18 L100,50 L80,55 L60,50 Z" opacity="0.5" />
                <path d="M100,18 L130,12 L150,30 L130,50 L100,50 Z" opacity="0.5" />
                <path d="M60,50 L80,55 L90,75 L70,85 L55,75 L45,65 L45,45 Z" opacity="0.5" />
                <path d="M100,50 L130,50 L140,70 L120,85 L100,80 L90,75 L80,55 L100,50 Z" opacity="0.5" />
                <path d="M130,50 L150,30 L165,50 L170,70 L150,85 L140,70 Z" opacity="0.5" />
                <path d="M70,85 L90,75 L100,80 L120,85 L110,110 L90,115 L70,110 L55,100 Z" opacity="0.5" />
                <path d="M120,85 L140,70 L150,85 L130,100 L110,110 Z" opacity="0.5" />
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
