import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Building2, MapPin, Award } from 'lucide-react';

const stats = [
  { value: 50, suffix: '+', label: 'Profesionales', sublabel: 'en nuestro equipo', icon: Users },
  { value: 150, suffix: '+', label: 'Proyectos Luxury', sublabel: 'completados con éxito', icon: Building2 },
  { value: 5, suffix: '', label: 'Ubicaciones', sublabel: 'en República Dominicana', icon: MapPin },
  { value: 15, suffix: '+', label: 'Años de Experiencia', sublabel: 'en construcción luxury', icon: Award },
];

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target, duration, started]);

  return count;
}

function StatCard({ stat, index, started }: { stat: typeof stats[0]; index: number; started: boolean }) {
  const count = useCountUp(stat.value, 2000, started);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = stat.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
    card.style.boxShadow = `0 24px 60px rgba(0,0,0,0.7)`;
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
      cardRef.current.style.boxShadow = 'none';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="stat-card glass white-border rounded-sm p-8 flex flex-col items-start gap-4 transition-all duration-300 cursor-none"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="p-3 bg-white/5 rounded-sm border border-white/10">
        <Icon size={22} className="text-offwhite/70" />
      </div>
      <div>
        <div className="font-playfair text-5xl md:text-6xl font-bold text-offwhite leading-none">
          {count}
          <span className="text-grey-light">{stat.suffix}</span>
        </div>
        <div className="font-montserrat font-semibold text-offwhite text-sm tracking-widest uppercase mt-2">{stat.label}</div>
        <div className="font-montserrat text-offwhite/40 text-xs mt-1">{stat.sublabel}</div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="stats" ref={ref} className="relative py-28 bg-obsidian">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-offwhite/30" />
            <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-offwhite/40">Nuestra Trayectoria</span>
            <div className="h-px w-8 bg-offwhite/30" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-offwhite">
            Números que <span className="mono-gradient">hablan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
