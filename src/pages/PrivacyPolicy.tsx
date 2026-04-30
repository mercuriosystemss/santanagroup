import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'titolare', title: '1. Titolare del Trattamento' },
  { id: 'dati-raccolti', title: '2. Dati Raccolti' },
  { id: 'finalita', title: '3. Finalità del Trattamento' },
  { id: 'base-giuridica', title: '4. Base Giuridica' },
  { id: 'conservazione', title: '5. Conservazione dei Dati' },
  { id: 'diritti', title: '6. I Tuoi Diritti' },
  { id: 'trasferimento', title: '7. Trasferimento dei Dati' },
  { id: 'minori', title: '8. Minori' },
  { id: 'modifiche', title: '9. Modifiche alla Policy' },
  { id: 'contatti', title: '10. Contatti' },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR)"
      lastUpdated="Aprile 2026"
      sections={sections}
    >
      <Section id="titolare" title="1. Titolare del Trattamento">
        <p>
          Il titolare del trattamento dei dati personali è <strong>RDSS Santana Group SRL</strong>, con sede legale in Av. Padre Abreu, La Romana, República Dominicana 22000 (di seguito "Società", "noi" o "Titolare").
        </p>
        <p>
          Per qualsiasi comunicazione relativa alla presente Privacy Policy o all'esercizio dei tuoi diritti, puoi contattarci all'indirizzo email: <a href="mailto:info@santanagroup.com">info@santanagroup.com</a>.
        </p>
      </Section>

      <Section id="dati-raccolti" title="2. Dati Raccolti">
        <p>Raccogliamo i seguenti categorie di dati personali:</p>
        <Subsection title="2.1 Dati forniti volontariamente">
          <ul>
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Contenuto dei messaggi inviati tramite il modulo di contatto</li>
          </ul>
        </Subsection>
        <Subsection title="2.2 Dati raccolti automaticamente">
          <ul>
            <li>Indirizzo IP e dati di navigazione</li>
            <li>Tipo di browser e sistema operativo</li>
            <li>Pagine visitate e durata della sessione</li>
            <li>Dati raccolti tramite cookie (vedi <Link to="/cookie-policy">Cookie Policy</Link>)</li>
          </ul>
        </Subsection>
      </Section>

      <Section id="finalita" title="3. Finalità del Trattamento">
        <p>I dati personali vengono trattati per le seguenti finalità:</p>
        <ul>
          <li><strong>Gestione delle richieste di contatto</strong> — elaborazione delle richieste inviate tramite il modulo di contatto e comunicazione della risposta.</li>
          <li><strong>Adempimenti contrattuali</strong> — gestione dei rapporti contrattuali con clienti e fornitori.</li>
          <li><strong>Obblighi di legge</strong> — adempimento degli obblighi previsti dalla normativa vigente in Repubblica Dominicana e nell'Unione Europea.</li>
          <li><strong>Analisi statistica</strong> — miglioramento dei servizi e del sito web attraverso analisi aggregate e anonimizzate.</li>
          <li><strong>Marketing</strong> — invio di comunicazioni promozionali, solo previo consenso esplicito dell'interessato.</li>
        </ul>
      </Section>

      <Section id="base-giuridica" title="4. Base Giuridica del Trattamento">
        <p>Il trattamento dei tuoi dati personali si basa sulle seguenti basi giuridiche:</p>
        <ul>
          <li><strong>Esecuzione di un contratto</strong> (art. 6, par. 1, lett. b GDPR) — per la gestione delle richieste e dei rapporti contrattuali.</li>
          <li><strong>Consenso</strong> (art. 6, par. 1, lett. a GDPR) — per l'invio di comunicazioni di marketing e per l'utilizzo di cookie non essenziali.</li>
          <li><strong>Obbligo legale</strong> (art. 6, par. 1, lett. c GDPR) — per adempimenti normativi.</li>
          <li><strong>Interesse legittimo</strong> (art. 6, par. 1, lett. f GDPR) — per la sicurezza del sito e il miglioramento dei servizi.</li>
        </ul>
      </Section>

      <Section id="conservazione" title="5. Conservazione dei Dati">
        <p>I dati personali vengono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti:</p>
        <ul>
          <li><strong>Dati di contatto</strong> — 24 mesi dalla ricezione della richiesta, salvo necessità di conservazione per obblighi legali.</li>
          <li><strong>Dati contrattuali</strong> — per la durata del contratto e per i successivi 10 anni, in conformità agli obblighi fiscali e legali.</li>
          <li><strong>Dati di navigazione</strong> — 13 mesi dalla raccolta.</li>
          <li><strong>Dati di marketing</strong> — fino alla revoca del consenso.</li>
        </ul>
        <p>Al termine del periodo di conservazione, i dati verranno cancellati o anonimizzati in modo irreversibile.</p>
      </Section>

      <Section id="diritti" title="6. I Tuoi Diritti">
        <p>In qualità di interessato, hai i seguenti diritti ai sensi del GDPR:</p>
        <ul>
          <li><strong>Diritto di accesso</strong> (art. 15) — ottenere conferma del trattamento e copia dei dati personali.</li>
          <li><strong>Diritto di rettifica</strong> (art. 16) — correggere dati inesatti o incompleti.</li>
          <li><strong>Diritto alla cancellazione</strong> (art. 17) — "diritto all'oblio" in determinati casi.</li>
          <li><strong>Diritto alla limitazione</strong> (art. 18) — limitare il trattamento in determinate circostanze.</li>
          <li><strong>Diritto alla portabilità</strong> (art. 20) — ricevere i dati in formato strutturato e leggibile.</li>
          <li><strong>Diritto di opposizione</strong> (art. 21) — opporsi al trattamento basato su interesse legittimo o per marketing diretto.</li>
          <li><strong>Diritto di revoca del consenso</strong> — revocare in qualsiasi momento il consenso prestato, senza pregiudizio per la liceità del trattamento precedente.</li>
        </ul>
        <p>
          Per esercitare i tuoi diritti, invia una richiesta scritta a <a href="mailto:info@santanagroup.com">info@santanagroup.com</a>. Risponderemo entro 30 giorni.
        </p>
        <p>
          Hai inoltre il diritto di proporre reclamo all'autorità di controllo competente.
        </p>
      </Section>

      <Section id="trasferimento" title="7. Trasferimento dei Dati a Terzi">
        <p>I tuoi dati personali possono essere condivisi con:</p>
        <ul>
          <li>Fornitori di servizi tecnici (hosting, email, analisi) che agiscono come responsabili del trattamento.</li>
          <li>Professionisti e consulenti (legali, fiscali, contabili) per adempimenti obbligatori.</li>
          <li>Autorità pubbliche, quando richiesto dalla legge.</li>
        </ul>
        <p>
          Non vendiamo né cediamo i tuoi dati personali a terzi per finalità proprie. Qualsiasi trasferimento avviene in conformità al GDPR e con le garanzie adeguate richieste per i trasferimenti internazionali.
        </p>
      </Section>

      <Section id="minori" title="8. Minori">
        <p>
          I nostri servizi non sono destinati a persone di età inferiore ai 18 anni. Non raccogliamo consapevolmente dati personali di minori. Qualora venissimo a conoscenza di aver raccolto dati di un minore, li cancelleremo immediatamente.
        </p>
      </Section>

      <Section id="modifiche" title="9. Modifiche alla Privacy Policy">
        <p>
          Ci riserviamo il diritto di aggiornare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con l'indicazione della data di ultimo aggiornamento. Per modifiche sostanziali, ti informeremo tramite un avviso prominente sul sito o via email.
        </p>
        <p>
          Ti invitiamo a consultare periodicamente questa pagina.
        </p>
      </Section>

      <Section id="contatti" title="10. Contatti">
        <p>Per qualsiasi domanda, dubbio o richiesta relativa alla presente Privacy Policy o al trattamento dei tuoi dati personali:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@santanagroup.com">info@santanagroup.com</a></li>
          <li><strong>Indirizzo:</strong> Av. Padre Abreu, La Romana, República Dominicana 22000</li>
          <li><strong>Telefono:</strong> +1 (809) 000-0000</li>
        </ul>
        <p className="mt-6 text-sm">
          Consulta anche:{' '}
          <Link to="/cookie-policy">Cookie Policy</Link>
          {' '}·{' '}
          <Link to="/termini-condizioni">Termini e Condizioni</Link>
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
