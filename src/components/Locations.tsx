import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, ArrowUpRight } from 'lucide-react';

const locations = [
  { id: 1, name: 'La Romana',     desc: 'Sede central y proyectos comerciales',  projects: 32, tag: 'HQ' },
  { id: 2, name: 'Casa de Campo', desc: 'Villas y residencias ultra luxury',      projects: 45, tag: null },
  { id: 3, name: 'Punta Cana',    desc: 'Resorts y complejos hoteleros',          projects: 38, tag: null },
  { id: 4, name: 'Bayahibe',      desc: 'Boutique hotels y villas privadas',      projects: 22, tag: null },
  { id: 5, name: 'Dominicus',     desc: 'Resorts frente al mar',                 projects: 18, tag: null },
];

export default function Locations() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="nosotros" className="relative py-28 bg-dark-surface">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — heading */}
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

            <div className="glass rounded-sm p-5">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-playfair text-3xl font-bold text-white">5</span>
                <span className="font-montserrat text-xs text-white/60 uppercase tracking-widest leading-tight">Ubicaciones<br />Activas</span>
              </div>
              <div className="h-px w-full bg-white/10 my-3" />
              <div className="flex items-center gap-3">
                <span className="font-playfair text-3xl font-bold text-white">155</span>
                <span className="font-montserrat text-xs text-white/60 uppercase tracking-widest leading-tight">Proyectos<br />Completados</span>
              </div>
              <div className="h-px w-full bg-white/10 my-3" />
              <div className="flex items-center gap-2 mt-1">
                <MapPin size={12} className="text-white/50 flex-shrink-0" />
                <span className="font-montserrat text-xs text-white/50">República Dominicana</span>
              </div>
            </div>
          </motion.div>

          {/* Right — location cards */}
          <div className="flex-1">
            <div className="space-y-3">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  onClick={() => setActiveId(activeId === loc.id ? null : loc.id)}
                  className={`group relative flex items-center justify-between p-5 rounded-sm border transition-all duration-300 cursor-none ${
                    activeId === loc.id
                      ? 'border-white/40 bg-white/8'
                      : 'border-white/12 bg-white/3 hover:border-white/28 hover:bg-white/6'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeId === loc.id ? 'bg-white' : 'bg-white/10 group-hover:bg-white/15'
                    }`}>
                      <MapPin size={16} className={activeId === loc.id ? 'text-black' : 'text-white/70'} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`font-montserrat text-sm font-semibold transition-colors ${
                          activeId === loc.id ? 'text-white' : 'text-white/85'
                        }`}>
                          {loc.name}
                        </span>
                        {loc.tag && (
                          <span className="font-montserrat text-[10px] font-bold tracking-widest text-white/60 border border-white/25 px-1.5 py-0.5 rounded-sm">
                            {loc.tag}
                          </span>
                        )}
                      </div>
                      <span className="font-montserrat text-xs text-white/50">{loc.desc}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right hidden sm:block">
                      <div className="font-playfair text-xl font-bold text-white">{loc.projects}</div>
                      <div className="font-montserrat text-xs text-white/45">proyectos</div>
                    </div>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-all duration-300 ${
                      activeId === loc.id ? 'bg-white' : 'bg-white/8 group-hover:bg-white/15'
                    }`}>
                      <ArrowUpRight size={14} className={activeId === loc.id ? 'text-black' : 'text-white/60'} />
                    </div>
                  </div>

                  {/* Expanded detail */}
                  <motion.div
                    initial={false}
                    animate={{ height: activeId === loc.id ? 'auto' : 0, opacity: activeId === loc.id ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 right-0 top-full overflow-hidden"
                    style={{ zIndex: 10 }}
                  >
                    <div className="border border-t-0 border-white/25 bg-black/60 backdrop-blur-md rounded-b-sm px-5 py-4">
                      <p className="font-montserrat text-xs text-white/65 leading-relaxed">
                        {loc.projects} proyectos completados en {loc.name}. Especialistas en {loc.desc.toLowerCase()}.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
