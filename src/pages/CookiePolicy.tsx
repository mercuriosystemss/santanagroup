import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'que-son', title: '1. ¿Qué Son las Cookies?' },
  { id: 'tipos', title: '2. Tipos de Cookies' },
  { id: 'cookies-usadas', title: '3. Cookies Utilizadas' },
  { id: 'terceros', title: '4. Cookies de Terceros' },
  { id: 'gestion', title: '5. Gestión desde el Navegador' },
  { id: 'preferencias', title: '6. Tus Preferencias' },
  { id: 'contacto', title: '7. Contacto' },
];

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - RDSS Santana Group</title>
        <meta name="description" content="Información sobre el uso de cookies en el sitio web de RDSS Santana Group." />
        <link rel="canonical" href="https://rdsssantanagroup.com/politica-cookies" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Política de Cookies - RDSS Santana Group" />
        <meta property="og:url" content="https://rdsssantanagroup.com/politica-cookies" />
      </Helmet>
      <LegalLayout
      title="Política de Cookies"
      subtitle="Información sobre el uso de cookies y tecnologías de seguimiento en el sitio web de RDSS Santana Group"
      lastUpdated="Abril 2026"
      sections={sections}
    >
      <Section id="que-son" title="1. ¿Qué Son las Cookies?">
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario durante la navegación. Se utilizan para que el sitio funcione correctamente, mejorar la experiencia del usuario y recopilar información estadística.
        </p>
        <p>
          Tecnologías similares a las cookies —como píxeles, web beacons y almacenamiento local— pueden usarse con fines equivalentes. En este documento, nos referimos a todas estas tecnologías con el término "cookies".
        </p>
      </Section>

      <Section id="tipos" title="2. Tipos de Cookies">
        <div className="space-y-5">
          <CookieCategory
            label="Necesarias"
            desc="Imprescindibles para el funcionamiento del sitio. Sin ellas algunas funcionalidades no estarían disponibles. No requieren consentimiento."
          />
          <CookieCategory
            label="Analíticas"
            desc="Recopilan información anónima sobre cómo los usuarios utilizan el sitio (páginas visitadas, tiempo de permanencia, errores). Ayudan a mejorar el rendimiento."
          />
          <CookieCategory
            label="Funcionales"
            desc="Permiten al sitio recordar las elecciones del usuario (idioma, preferencias) para ofrecer una experiencia personalizada."
          />
          <CookieCategory
            label="Marketing"
            desc="Utilizadas para mostrar anuncios relevantes según los intereses del usuario. Pueden compartirse con socios publicitarios externos."
          />
        </div>
      </Section>

      <Section id="cookies-usadas" title="3. Cookies Utilizadas en Este Sitio">
        <p>La siguiente tabla detalla las cookies presentes en este sitio:</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/15">
                <th className="text-left py-3 pr-4 font-semibold text-white/70 tracking-widest uppercase">Nombre</th>
                <th className="text-left py-3 pr-4 font-semibold text-white/70 tracking-widest uppercase">Tipo</th>
                <th className="text-left py-3 pr-4 font-semibold text-white/70 tracking-widest uppercase">Duración</th>
                <th className="text-left py-3 font-semibold text-white/70 tracking-widest uppercase">Finalidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/6">
              {[
                { name: 'santana_cookie_consent', type: 'Necesaria', duration: '12 meses', desc: 'Guarda las preferencias de cookies del usuario' },
                { name: '_ga', type: 'Analítica', duration: '2 años', desc: 'Google Analytics — distingue usuarios únicos' },
                { name: '_ga_*', type: 'Analítica', duration: '2 años', desc: 'Google Analytics — mantiene el estado de la sesión' },
                { name: '_gid', type: 'Analítica', duration: '24 horas', desc: 'Google Analytics — distingue usuarios' },
                { name: 'sb-*-auth-token', type: 'Necesaria', duration: 'Sesión', desc: 'Autenticación Supabase' },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="py-3 pr-4 font-mono text-white/80">{row.name}</td>
                  <td className="py-3 pr-4 text-white/55">{row.type}</td>
                  <td className="py-3 pr-4 text-white/55">{row.duration}</td>
                  <td className="py-3 text-white/55">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="terceros" title="4. Cookies de Terceros">
        <p>Algunas cookies son instaladas por servicios de terceros que aparecen en nuestras páginas. No tenemos control directo sobre estas cookies.</p>
        <ul>
          <li>
            <strong>Google Analytics</strong> — utilizamos Google Analytics para análisis estadístico. Google puede usar los datos con fines publicitarios propios. Política: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
          </li>
          <li>
            <strong>Instagram / Meta</strong> — el enlace a nuestro perfil de Instagram puede implicar la carga de recursos de Meta. Política: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a>
          </li>
        </ul>
      </Section>

      <Section id="gestion" title="5. Gestión desde el Navegador">
        <p>Puedes gestionar, desactivar o eliminar las cookies directamente desde tu navegador. Instrucciones para los principales navegadores:</p>
        <ul>
          <li><strong>Google Chrome</strong> — Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
          <li><strong>Mozilla Firefox</strong> — Preferencias → Privacidad y seguridad → Cookies y datos del sitio</li>
          <li><strong>Safari</strong> — Preferencias → Privacidad → Gestionar datos de sitios web</li>
          <li><strong>Microsoft Edge</strong> — Configuración → Cookies y permisos del sitio</li>
        </ul>
        <p>
          Atención: deshabilitar las cookies necesarias puede comprometer el correcto funcionamiento del sitio.
        </p>
      </Section>

      <Section id="preferencias" title="6. Tus Preferencias">
        <p>
          Puedes modificar tus preferencias de cookies en cualquier momento a través del banner que aparece en la primera visita o haciendo clic en el botón de abajo.
        </p>
        <button
          onClick={() => {
            localStorage.removeItem('santana_cookie_consent');
            window.location.reload();
          }}
          className="mt-4 inline-flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase px-5 py-2.5 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-none"
        >
          Modificar preferencias de cookies
        </button>
        <p className="mt-4">
          Para más información sobre el tratamiento de tus datos personales, consulta nuestra <Link to="/politica-privacidad">Política de Privacidad</Link>.
        </p>
      </Section>

      <Section id="contacto" title="7. Contacto">
        <p>Para cualquier consulta relacionada con el uso de cookies en este sitio:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@santanagroup.com">info@santanagroup.com</a></li>
          <li><strong>Dirección:</strong> Av. Padre Abreu, La Romana, República Dominicana 22000</li>
        </ul>
        <p className="mt-6 text-sm">
          Consulta también:{' '}
          <Link to="/politica-privacidad">Política de Privacidad</Link>
          {' '}·{' '}
          <Link to="/terminos-condiciones">Términos y Condiciones</Link>
        </p>
      </Section>
    </LegalLayout>
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="pt-10 mt-10 border-t border-white/8 first:border-t-0 first:pt-0 first:mt-0 scroll-mt-24">
      <h2 className="font-playfair text-2xl font-bold text-white mb-5">{title}</h2>
      <div className="space-y-4 font-montserrat text-sm text-white/65 leading-relaxed legal-text">
        {children}
      </div>
    </section>
  );
}

function CookieCategory({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 border border-white/10 rounded-sm bg-white/3">
      <div className="flex-shrink-0 mt-0.5">
        <span className="font-montserrat text-xs font-bold tracking-widest uppercase text-white/70 border border-white/20 px-2 py-1 rounded-sm">
          {label}
        </span>
      </div>
      <p className="font-montserrat text-xs text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}
