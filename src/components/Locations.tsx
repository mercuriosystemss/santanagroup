import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

const locations = [
  { id: 1, name: 'La Romana',      desc: 'Sede central y proyectos comerciales',  projects: 32, x: 46, y: 58 },
  { id: 2, name: 'Casa de Campo',  desc: 'Villas y residencias ultra luxury',      projects: 45, x: 40, y: 64 },
  { id: 3, name: 'Bayahibe',       desc: 'Boutique hotels y villas privadas',      projects: 22, x: 50, y: 67 },
  { id: 4, name: 'Dominicus',      desc: 'Resorts frente al mar',                 projects: 18, x: 56, y: 70 },
  { id: 5, name: 'Punta Cana',     desc: 'Resorts y complejos hoteleros',          projects: 38, x: 75, y: 39 },
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
      style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)', zIndex: isActive ? 30 : 10 }}
      onClick={onClick}
    >
      <div className="relative">
        <div className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
          isActive
            ? 'bg-white scale-125 shadow-[0_0_18px_rgba(255,255,255,0.5)]'
            : 'bg-black/70 border-2 border-white hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]'
        }`}>
          <MapPin size={16} className={isActive ? 'text-black' : 'text-white'} />
          {!isActive && (
            <span className="absolute inset-0 rounded-full border border-white/40 animate-ping" />
          )}
        </div>

        {/* Tooltip above pin */}
        <motion.div
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 6, scale: isActive ? 1 : 0.92 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 pointer-events-none"
          style={{ zIndex: 40 }}
        >
          <div className="bg-black/90 border border-white/25 rounded-sm p-3 backdrop-blur-md">
            <div className="font-playfair font-bold text-white text-sm mb-0.5">{loc.name}</div>
            <div className="font-montserrat text-white/65 text-xs mb-1.5">{loc.desc}</div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-white/60 flex-shrink-0" />
              <span className="font-montserrat text-white/85 text-xs font-semibold">{loc.projects} proyectos</span>
            </div>
          </div>
          {/* Caret */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
            style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid rgba(255,255,255,0.25)' }} />
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
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 flex-shrink-0"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-white/30" />
              <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-white/65">Presencia</span>
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

          {/* Right column — map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            {/* Map container — fixed height, overflow visible for tooltips */}
            <div className="glass rounded-sm p-4" style={{ overflow: 'visible' }}>
              <div className="relative" style={{ height: '420px' }}>
                {/* SVG map */}
                <svg
                  viewBox="0 0 400 280"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="islandFill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.13)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                    </linearGradient>
                    <filter id="islandGlow" x="-15%" y="-15%" width="130%" height="130%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Grid */}
                  <g stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
                    <line x1="0" y1="70"  x2="400" y2="70"  />
                    <line x1="0" y1="140" x2="400" y2="140" />
                    <line x1="0" y1="210" x2="400" y2="210" />
                    <line x1="100" y1="0" x2="100" y2="280" />
                    <line x1="200" y1="0" x2="200" y2="280" />
                    <line x1="300" y1="0" x2="300" y2="280" />
                  </g>

                  {/*
                    Dominican Republic outline — realistic east-west elongated shape.
                    The island spans roughly x: 60-360, y: 60-200 in viewBox coords.
                    Pin percentages map to these bounds:
                      x% → 60 + x% * 300
                      y% → 60 + y% * 140
                  */}
                  <path
                    d="
                      M 70,120
                      L 85,95  L 105,82  L 130,76  L 160,70
                      L 195,66  L 230,65  L 265,67  L 295,72
                      L 320,80  L 340,92  L 355,108 L 358,125
                      L 352,142 L 338,157 L 318,167 L 295,173
                      L 268,177 L 240,178 L 212,176 L 185,172
                      L 158,165 L 132,155 L 108,142 L 88,130
                      Z
                    "
                    fill="url(#islandFill)"
                    stroke="rgba(255,255,255,0.92)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    filter="url(#islandGlow)"
                  />

                  {/* Interior region lines */}
                  <path d="M 70,120 L 130,76  L 160,70  L 155,130 L 108,142 L 88,130 Z"
                    fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                  <path d="M 160,70  L 230,65  L 245,130 L 195,138 L 155,130 Z"
                    fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                  <path d="M 230,65  L 320,80  L 318,167 L 268,177 L 245,130 Z"
                    fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                  <path d="M 88,130  L 155,130 L 185,172 L 132,155 L 108,142 Z"
                    fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                  <path d="M 155,130 L 245,130 L 240,178 L 185,172 Z"
                    fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

                  {/* Compass */}
                  <g transform="translate(370, 248)" opacity="0.55">
                    <circle cx="0" cy="0" r="11" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
                    <line x1="0" y1="-11" x2="0" y2="11" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                    <line x1="-11" y1="0" x2="11" y2="0" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                    <text x="0" y="-14" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="7" fontFamily="monospace">N</text>
                  </g>

                  {/* Scale label */}
                  <text x="20" y="265" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">Rep. Dominicana</text>
                </svg>

                {/* Location pins — coordinates as % of the 420px tall container */}
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
            </div>

            {/* Status bar below map */}
            <div className="mt-3 bg-black/40 border border-white/15 backdrop-blur-md rounded-sm px-4 py-2.5 flex items-center justify-between">
              <span className="font-montserrat text-xs text-white/55">República Dominicana</span>
              <span className="font-montserrat text-xs text-white font-semibold">5 ubicaciones activas</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
