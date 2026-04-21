import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Arquitectura & Diseño',
    description: 'Proyectos arquitectónicos completos desde concepto hasta entrega. Diseñamos espacios que fusionan funcionalidad y elegancia atemporal.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80',
    features: ['Diseño conceptual', 'Renderizado 3D', 'Dirección artística', 'Supervisión técnica'],
    number: '01',
  },
  {
    id: 2,
    title: 'Construcción & Project Management',
    description: 'Gestión integral de proyectos luxury llave en mano. Coordinamos cada detalle para garantizar excelencia en cada etapa.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=80',
    features: ['Gestión de obra', 'Control de calidad', 'Coordinación de equipos', 'Entrega llave en mano'],
    number: '02',
  },
  {
    id: 3,
    title: 'RDSS Wood Design',
    description: 'Muebles a medida y carpintería de lujo personalizada. Cada pieza es una obra de arte funcional creada para espacios únicos.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=80',
    features: ['Muebles a medida', 'Cocinas de lujo', 'Closets premium', 'Puertas y ventanas'],
    number: '03',
    logo: '/santana-wood-logo.png',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const hasLogo = 'logo' in service && service.logo;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.boxShadow = hasLogo ? '0 24px 70px rgba(0,0,0,0.15)' : '0 24px 70px rgba(0,0,0,0.75)';
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1,1,1)';
      cardRef.current.style.boxShadow = 'none';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`service-card group relative rounded-sm overflow-hidden cursor-none transition-all duration-500 ${
          hasLogo
            ? 'bg-white border border-obsidian/10'
            : 'bg-dark-surface white-border'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            hasLogo
              ? 'from-white via-white/30 to-transparent'
              : 'from-dark-surface via-dark-surface/40 to-transparent'
          }`} />
          <div className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            hasLogo
              ? 'bg-obsidian'
              : 'bg-offwhite'
          }`}>
            <ArrowUpRight size={18} className={hasLogo ? 'text-offwhite' : 'text-obsidian'} />
          </div>
          <div className={`absolute top-4 left-4 font-playfair text-5xl font-bold ${
            hasLogo ? 'text-obsidian/8' : 'text-offwhite/8'
          }`}>
            {service.number}
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`h-px w-6 ${hasLogo ? 'bg-obsidian/20' : 'bg-offwhite/30'}`} />
              <span className={`font-montserrat text-xs tracking-[0.3em] uppercase ${
                hasLogo ? 'text-obsidian/50' : 'text-offwhite/40'
              }`}>{service.number}</span>
            </div>
            {hasLogo && (
              <motion.img
                src={service.logo as string}
                alt="RDSS Wood Design"
                className="h-16 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300 group-hover:drop-shadow-[0_0_12px_rgba(30,30,30,0.3)]"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
          <h3 className={`font-playfair text-2xl font-bold mb-4 transition-colors duration-300 ${
            hasLogo
              ? 'text-obsidian group-hover:text-obsidian/80'
              : 'text-offwhite group-hover:text-white-soft'
          }`}>
            {service.title}
          </h3>
          <p className={`font-montserrat text-sm leading-relaxed mb-6 ${
            hasLogo
              ? 'text-obsidian/60'
              : 'text-offwhite/50'
          }`}>
            {service.description}
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {service.features.map((f) => (
              <li key={f} className={`flex items-center gap-2 font-montserrat text-xs ${
                hasLogo
                  ? 'text-obsidian/40'
                  : 'text-offwhite/35'
              }`}>
                <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
                  hasLogo
                    ? 'bg-obsidian/30'
                    : 'bg-offwhite/40'
                }`} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="servicios" className="relative py-28 bg-dark-surface">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-offwhite/30" />
              <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-offwhite/40">Lo que hacemos</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-offwhite">
              Nuestros<br />
              <span className="mono-gradient">Servicios</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xs font-montserrat text-sm text-offwhite/40 leading-relaxed lg:text-right"
          >
            Desde la concepción hasta la entrega final, cada proyecto refleja nuestra pasión por la excelencia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
