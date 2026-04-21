import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, ArrowUpRight } from 'lucide-react';

type Category = 'todos' | 'resorts' | 'villas' | 'comercial';

const filters: { label: string; value: Category }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Resorts', value: 'resorts' },
  { label: 'Villas', value: 'villas' },
  { label: 'Comercial', value: 'comercial' },
];

const projects = [
  {
    id: 1,
    title: 'Villa Moderna Caribe',
    location: 'Casa de Campo',
    category: 'villas' as Category,
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2024',
  },
  {
    id: 2,
    title: 'Resort Vista del Caribe',
    location: 'Punta Cana',
    category: 'resorts' as Category,
    image: 'https://images.pexels.com/photos/2016800/pexels-photo-2016800.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2024',
  },
  {
    id: 3,
    title: 'Suite Resort Beachfront',
    location: 'Bayahibe',
    category: 'resorts' as Category,
    image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023',
  },
  {
    id: 4,
    title: 'Casa Residencial Dominicus',
    location: 'Dominicus',
    category: 'villas' as Category,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023',
  },
  {
    id: 5,
    title: 'Centro Comercial La Romana',
    location: 'La Romana',
    category: 'comercial' as Category,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023',
  },
  {
    id: 6,
    title: 'Villa Oceanfront Privada',
    location: 'Casa de Campo',
    category: 'villas' as Category,
    image: 'https://images.pexels.com/photos/1522693/pexels-photo-1522693.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2022',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    }
  };

  return (
    <div ref={ref}>
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="portfolio-item group relative overflow-hidden rounded-sm cursor-none bg-dark-surface"
      style={{ aspectRatio: '4/3', transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-montserrat text-xs text-offwhite/60 bg-white/10 px-2 py-0.5 rounded-sm backdrop-blur-sm">
            {project.year}
          </span>
        </div>
        <h3 className="font-playfair text-xl font-bold text-offwhite mb-1">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-offwhite/50">
          <MapPin size={12} />
          <span className="font-montserrat text-xs">{project.location}</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 w-9 h-9 bg-offwhite flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <ArrowUpRight size={16} className="text-obsidian" />
      </div>
    </motion.div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Category>('todos');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = active === 'todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-28 bg-obsidian">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.02) 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-offwhite/30" />
              <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-offwhite/40">Proyectos destacados</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-offwhite">
              Nuestro<br />
              <span className="mono-gradient">Portfolio</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-2 flex-wrap"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2 font-montserrat text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-none border ${
                  active === f.value
                    ? 'bg-offwhite text-obsidian border-offwhite'
                    : 'text-offwhite/50 border-offwhite/10 hover:border-offwhite/30 hover:text-offwhite/80'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
