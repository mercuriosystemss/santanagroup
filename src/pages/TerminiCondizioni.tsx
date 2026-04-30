import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'aceptacion', title: '1. Aceptación de los Términos' },
  { id: 'descripcion', title: '2. Descripción de los Servicios' },
  { id: 'propiedad-intelectual', title: '3. Propiedad Intelectual' },
  { id: 'uso-aceptable', title: '4. Uso Aceptable' },
  { id: 'limitacion', title: '5. Limitación de Responsabilidad' },
  { id: 'disclaimer', title: '6. Aviso Legal' },
  { id: 'enlaces-externos', title: '7. Enlaces a Sitios Externos' },
  { id: 'ley-aplicable', title: '8. Ley Aplicable' },
  { id: 'cambios', title: '9. Modificaciones' },
  { id: 'contacto', title: '10. Contacto' },
];

export default function TerminiCondizioni() {
  return (
    <LegalLayout
      title="Términos y Condiciones"
      subtitle="Condiciones generales de uso del sitio web de RDSS Santana Group"
      lastUpdated="Abril 2026"
      sections={sections}
    >
      <Section id="aceptacion" title="1. Aceptación de los Términos">
        <p>
          Al acceder y utilizar el sitio web <strong>santanagroup.com</strong> (el "Sitio"), gestionado por <strong>RDSS Santana Group SRL</strong> (la "Empresa"), con domicilio social en Av. Padre Abreu, La Romana, República Dominicana 22000, el usuario acepta íntegramente y sin reservas los presentes Términos y Condiciones de uso.
        </p>
        <p>
          Si no aceptas estos términos, te rogamos que no utilices el Sitio. El uso continuado del Sitio tras la publicación de cualquier modificación constituye aceptación de los nuevos términos.
        </p>
      </Section>

      <Section id="descripcion" title="2. Descripción de los Servicios">
        <p>
          RDSS Santana Group es una empresa especializada en <strong>construcción, arquitectura y diseño de interiores</strong> en República Dominicana. El Sitio tiene como finalidad:
        </p>
        <ul>
          <li>Presentar los servicios y el portfolio de la Empresa</li>
          <li>Proporcionar información sobre los proyectos realizados</li>
          <li>Permitir a los usuarios contactar a la Empresa para solicitudes comerciales</li>
          <li>Comunicar la presencia territorial y las ubicaciones operativas</li>
        </ul>
        <p>
          El Sitio tiene carácter informativo y no constituye una oferta contractual vinculante. Cualquier acuerdo comercial está sujeto a contrato independiente.
        </p>
      </Section>

      <Section id="propiedad-intelectual" title="3. Propiedad Intelectual">
        <p>
          Todos los contenidos presentes en el Sitio —incluyendo, a título enunciativo, textos, imágenes, fotografías, logotipos, marcas, gráficos, vídeos, código fuente y diseño— son propiedad exclusiva de RDSS Santana Group SRL o de los respectivos titulares de derechos, y están protegidos por las leyes de propiedad intelectual aplicables en República Dominicana y a nivel internacional.
        </p>
        <p>
          Queda prohibido reproducir, distribuir, modificar, transmitir, reutilizar, publicar o utilizar con fines comerciales los contenidos del Sitio sin autorización escrita previa de la Empresa.
        </p>
        <p>
          El logotipo RDSS Santana Group y todas las marcas asociadas son marcas registradas de la Empresa. Cualquier uso no autorizado está expresamente prohibido.
        </p>
      </Section>

      <Section id="uso-aceptable" title="4. Uso Aceptable">
        <p>Al utilizar el Sitio, el usuario se compromete a:</p>
        <ul>
          <li>No utilizar el Sitio con fines ilegales o no autorizados</li>
          <li>No intentar acceder a sistemas o datos no destinados al usuario</li>
          <li>No transmitir virus informáticos, malware u otro código dañino</li>
          <li>No realizar scraping, rastreo automatizado o recopilación masiva de datos</li>
          <li>No interferir en el correcto funcionamiento del Sitio</li>
          <li>No hacerse pasar por otras personas o entidades</li>
          <li>No enviar spam o comunicaciones no solicitadas a través del formulario de contacto</li>
        </ul>
        <p>
          La Empresa se reserva el derecho de denunciar ante las autoridades competentes cualquier actividad ilícita detectada.
        </p>
      </Section>

      <Section id="limitacion" title="5. Limitación de Responsabilidad">
        <p>
          En la medida máxima permitida por la ley aplicable, RDSS Santana Group SRL no será responsable de:
        </p>
        <ul>
          <li>Daños directos, indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de usar el Sitio</li>
          <li>Errores, omisiones o inexactitudes en los contenidos del Sitio</li>
          <li>Interrupciones, fallos o indisponibilidad temporal del Sitio</li>
          <li>Pérdida de datos o beneficios derivados del uso del Sitio</li>
          <li>Actuaciones de terceros relacionadas con el uso del Sitio</li>
        </ul>
        <p>
          La responsabilidad total de la Empresa, en caso de ser aplicable, no podrá superar en ningún caso el importe de 100,00 USD.
        </p>
      </Section>

      <Section id="disclaimer" title="6. Aviso Legal">
        <p>
          La información contenida en el Sitio se ofrece "tal cual", sin garantías de ningún tipo, expresas o implícitas. La Empresa no garantiza que el Sitio esté libre de errores, virus u otros componentes dañinos, ni que el acceso al Sitio sea ininterrumpido.
        </p>
        <p>
          Los contenidos del portfolio y los proyectos descritos se presentan con carácter ilustrativo. Las especificaciones técnicas, plazos y costes de los trabajos están sujetos a valoración individual y contrato independiente.
        </p>
        <p>
          Las fotografías presentes en el Sitio pueden incluir imágenes de stock o renders de proyecto. Los resultados reales pueden variar.
        </p>
      </Section>

      <Section id="enlaces-externos" title="7. Enlaces a Sitios Externos">
        <p>
          El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente por conveniencia del usuario. La Empresa no tiene control sobre dichos sitios y no se hace responsable de sus contenidos, políticas de privacidad ni prácticas.
        </p>
        <p>
          La presencia de un enlace a un sitio externo no implica la aprobación o respaldo por parte de RDSS Santana Group de los contenidos de ese sitio.
        </p>
      </Section>

      <Section id="ley-aplicable" title="8. Ley Aplicable y Fuero Competente">
        <p>
          Los presentes Términos y Condiciones se rigen por las leyes de la <strong>República Dominicana</strong>. Para cualquier controversia relativa a la interpretación o ejecución de estos Términos, las partes se comprometen a intentar una solución amistosa.
        </p>
        <p>
          En caso de no llegarse a un acuerdo, las controversias se someterán a la competencia exclusiva de los tribunales de La Romana, República Dominicana, salvo acuerdo escrito en contrario entre las partes o disposiciones legales aplicables a consumidores.
        </p>
      </Section>

      <Section id="cambios" title="9. Modificaciones de los Términos">
        <p>
          RDSS Santana Group SRL se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor de manera inmediata desde su publicación en el Sitio.
        </p>
        <p>
          Se recomienda consultar periódicamente esta página para verificar posibles actualizaciones. El uso continuado del Sitio tras la publicación de modificaciones constituye aceptación de los nuevos Términos.
        </p>
      </Section>

      <Section id="contacto" title="10. Contacto">
        <p>Para cualquier consulta relacionada con los presentes Términos y Condiciones:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@santanagroup.com">info@santanagroup.com</a></li>
          <li><strong>Dirección:</strong> Av. Padre Abreu, La Romana, República Dominicana 22000</li>
          <li><strong>Teléfono:</strong> +1 (809) 000-0000</li>
        </ul>
        <p className="mt-6 text-sm">
          Consulta también:{' '}
          <Link to="/politica-privacidad">Política de Privacidad</Link>
          {' '}·{' '}
          <Link to="/politica-cookies">Política de Cookies</Link>
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
