import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle } from 'lucide-react';

const inputClass = `
  w-full bg-dark-card border border-white/20 text-white font-montserrat text-sm px-4 py-3.5
  focus:outline-none focus:border-white/50 transition-colors duration-300 placeholder:text-white/35
  hover:border-white/35 rounded-sm cursor-none
`;

const labelClass = 'block font-montserrat text-xs font-medium text-white/75 uppercase tracking-widest mb-2';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contacto" className="relative py-28 bg-obsidian overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-offwhite/30" />
              <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-white/65">Hablemos</span>
              <div className="h-px w-8 bg-offwhite/30" />
            </div>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-offwhite mb-5">
              Inicia tu<br />
              <span className="mono-gradient">proyecto hoy</span>
            </h2>
            <p className="font-montserrat text-white/65 text-sm max-w-lg mx-auto leading-relaxed">
              Contáctanos hoy y transformemos tu visión en realidad. Consulta inicial completamente gratuita.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass white-border rounded-sm p-8 md:p-12"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 gap-5"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <CheckCircle size={40} className="text-offwhite" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-offwhite text-center">
                Mensaje Enviado
              </h3>
              <p className="font-montserrat text-white/65 text-sm text-center max-w-xs">
                Gracias por contactarnos. Uno de nuestros expertos se pondrá en contacto contigo en menos de 24 horas.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 font-montserrat text-xs text-offwhite/50 underline underline-offset-4 hover:text-offwhite transition-colors cursor-none"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Nombre completo</label>
                  <input type="text" required placeholder="Ej. Carlos Martínez" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Correo electrónico</label>
                  <input type="email" required placeholder="carlos@empresa.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Teléfono</label>
                  <input type="tel" placeholder="+1 (809) 000-0000" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Tipo de proyecto</label>
                  <select required className={inputClass} defaultValue="">
                    <option value="" disabled>Seleccionar...</option>
                    <option>Villa residencial</option>
                    <option>Resort / Hotel</option>
                    <option>Proyecto comercial</option>
                    <option>Remodelación</option>
                    <option>Muebles a medida</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Presupuesto estimado</label>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Seleccionar...</option>
                    <option>USD 50,000 – 100,000</option>
                    <option>USD 100,000 – 250,000</option>
                    <option>USD 250,000 – 500,000</option>
                    <option>USD 500,000 – 1,000,000</option>
                    <option>USD 1,000,000+</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Timeline</label>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Seleccionar...</option>
                    <option>Inmediato</option>
                    <option>1 – 3 meses</option>
                    <option>3 – 6 meses</option>
                    <option>6 – 12 meses</option>
                    <option>Etapa de planificación</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Mensaje</label>
                <textarea
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto, ubicación, requerimientos especiales..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-4 border-2 border-white bg-white/10 text-white font-montserrat text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-none disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      SOLICITAR CONSULTA GRATUITA <Send size={14} />
                    </span>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
