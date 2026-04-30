import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'responsable', title: '1. Responsable del Tratamiento' },
  { id: 'datos-recogidos', title: '2. Datos Recopilados' },
  { id: 'finalidad', title: '3. Finalidad del Tratamiento' },
  { id: 'base-juridica', title: '4. Base Jurídica' },
  { id: 'conservacion', title: '5. Conservación de los Datos' },
  { id: 'derechos', title: '6. Tus Derechos' },
  { id: 'transferencia', title: '7. Transferencia de Datos' },
  { id: 'menores', title: '8. Menores de Edad' },
  { id: 'cambios', title: '9. Cambios en esta Política' },
  { id: 'contacto', title: '10. Contacto' },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      subtitle="Información sobre el tratamiento de datos personales de RDSS Santana Group"
      lastUpdated="Abril 2026"
      sections={sections}
    >
      <Section id="responsable" title="1. Responsable del Tratamiento">
        <p>
          El responsable del tratamiento de los datos personales es <strong>RDSS Santana Group SRL</strong>, con domicilio social en Av. Padre Abreu, La Romana, República Dominicana 22000 (en adelante "la Empresa", "nosotros" o "el Responsable").
        </p>
        <p>
          Para cualquier consulta relacionada con esta Política de Privacidad o el ejercicio de tus derechos, puedes contactarnos en: <a href="mailto:info@santanagroup.com">info@santanagroup.com</a>.
        </p>
      </Section>

      <Section id="datos-recogidos" title="2. Datos Recopilados">
        <p>Recopilamos las siguientes categorías de datos personales:</p>
        <Subsection title="2.1 Datos proporcionados voluntariamente">
          <ul>
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Contenido de los mensajes enviados a través del formulario de contacto</li>
          </ul>
        </Subsection>
        <Subsection title="2.2 Datos recopilados automáticamente">
          <ul>
            <li>Dirección IP y datos de navegación</li>
            <li>Tipo de navegador y sistema operativo</li>
            <li>Páginas visitadas y duración de la sesión</li>
            <li>Datos recopilados mediante cookies (ver <Link to="/politica-cookies">Política de Cookies</Link>)</li>
          </ul>
        </Subsection>
      </Section>

      <Section id="finalidad" title="3. Finalidad del Tratamiento">
        <p>Los datos personales se tratan con las siguientes finalidades:</p>
        <ul>
          <li><strong>Gestión de solicitudes de contacto</strong> — atender las consultas enviadas a través del formulario y dar respuesta al usuario.</li>
          <li><strong>Cumplimiento contractual</strong> — gestión de las relaciones contractuales con clientes y proveedores.</li>
          <li><strong>Obligaciones legales</strong> — cumplimiento de las obligaciones establecidas por la normativa vigente en República Dominicana.</li>
          <li><strong>Análisis estadístico</strong> — mejora de los servicios y del sitio web mediante análisis agregados y anonimizados.</li>
          <li><strong>Marketing</strong> — envío de comunicaciones promocionales, únicamente con el consentimiento expreso del interesado.</li>
        </ul>
      </Section>

      <Section id="base-juridica" title="4. Base Jurídica del Tratamiento">
        <p>El tratamiento de tus datos personales se fundamenta en las siguientes bases jurídicas:</p>
        <ul>
          <li><strong>Ejecución de un contrato</strong> — para la gestión de consultas y relaciones contractuales.</li>
          <li><strong>Consentimiento</strong> — para el envío de comunicaciones de marketing y el uso de cookies no esenciales.</li>
          <li><strong>Obligación legal</strong> — para el cumplimiento de requisitos normativos.</li>
          <li><strong>Interés legítimo</strong> — para la seguridad del sitio y la mejora de los servicios.</li>
        </ul>
      </Section>

      <Section id="conservacion" title="5. Conservación de los Datos">
        <p>Los datos personales se conservan durante el tiempo estrictamente necesario para cumplir con las finalidades para las que fueron recopilados:</p>
        <ul>
          <li><strong>Datos de contacto</strong> — 24 meses desde la recepción de la solicitud, salvo obligación legal de conservación.</li>
          <li><strong>Datos contractuales</strong> — durante la vigencia del contrato y los 10 años posteriores, conforme a obligaciones fiscales y legales.</li>
          <li><strong>Datos de navegación</strong> — 13 meses desde su recopilación.</li>
          <li><strong>Datos de marketing</strong> — hasta la revocación del consentimiento.</li>
        </ul>
        <p>Transcurrido el periodo de conservación, los datos serán eliminados o anonimizados de forma irreversible.</p>
      </Section>

      <Section id="derechos" title="6. Tus Derechos">
        <p>Como titular de los datos, tienes los siguientes derechos:</p>
        <ul>
          <li><strong>Derecho de acceso</strong> — obtener confirmación del tratamiento y una copia de tus datos personales.</li>
          <li><strong>Derecho de rectificación</strong> — corregir datos inexactos o incompletos.</li>
          <li><strong>Derecho de supresión</strong> — solicitar la eliminación de tus datos en determinados supuestos.</li>
          <li><strong>Derecho de limitación</strong> — restringir el tratamiento en determinadas circunstancias.</li>
          <li><strong>Derecho de portabilidad</strong> — recibir tus datos en un formato estructurado y legible por máquina.</li>
          <li><strong>Derecho de oposición</strong> — oponerte al tratamiento basado en interés legítimo o con fines de marketing directo.</li>
          <li><strong>Derecho a revocar el consentimiento</strong> — en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
        </ul>
        <p>
          Para ejercer tus derechos, envía una solicitud escrita a <a href="mailto:info@santanagroup.com">info@santanagroup.com</a>. Responderemos en un plazo máximo de 30 días.
        </p>
      </Section>

      <Section id="transferencia" title="7. Transferencia de Datos a Terceros">
        <p>Tus datos personales podrán ser compartidos con:</p>
        <ul>
          <li>Proveedores de servicios técnicos (alojamiento web, correo electrónico, análisis) que actúan como encargados del tratamiento.</li>
          <li>Profesionales y asesores (legales, fiscales, contables) para el cumplimiento de obligaciones.</li>
          <li>Autoridades públicas, cuando así lo exija la ley.</li>
        </ul>
        <p>
          No vendemos ni cedemos tus datos personales a terceros para fines propios. Cualquier transferencia se realiza con las garantías adecuadas exigidas por la normativa aplicable.
        </p>
      </Section>

      <Section id="menores" title="8. Menores de Edad">
        <p>
          Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos conscientemente datos personales de menores. Si tomamos conocimiento de haber recopilado datos de un menor, los eliminaremos de inmediato.
        </p>
      </Section>

      <Section id="cambios" title="9. Cambios en esta Política">
        <p>
          Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios se publicarán en esta página con la fecha de última actualización. Para modificaciones sustanciales, te informaremos mediante un aviso destacado en el sitio o por correo electrónico.
        </p>
        <p>Te recomendamos consultar esta página periódicamente.</p>
      </Section>

      <Section id="contacto" title="10. Contacto">
        <p>Para cualquier consulta sobre esta Política de Privacidad o el tratamiento de tus datos personales:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@santanagroup.com">info@santanagroup.com</a></li>
          <li><strong>Dirección:</strong> Av. Padre Abreu, La Romana, República Dominicana 22000</li>
          <li><strong>Teléfono:</strong> +1 (809) 000-0000</li>
        </ul>
        <p className="mt-6 text-sm">
          Consulta también:{' '}
          <Link to="/politica-cookies">Política de Cookies</Link>
          {' '}·{' '}
          <Link to="/terminos-condiciones">Términos y Condiciones</Link>
        </p>
      </Section>
    </LegalLayout>
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

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="font-montserrat text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">{title}</h3>
      <div className="font-montserrat text-sm text-white/65 leading-relaxed">{children}</div>
    </div>
  );
}
