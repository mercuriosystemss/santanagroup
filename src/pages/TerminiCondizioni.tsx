import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'accettazione', title: '1. Accettazione dei Termini' },
  { id: 'descrizione', title: '2. Descrizione dei Servizi' },
  { id: 'proprieta-intellettuale', title: '3. Proprietà Intellettuale' },
  { id: 'uso-accettabile', title: '4. Uso Accettabile' },
  { id: 'limitazione', title: '5. Limitazione di Responsabilità' },
  { id: 'disclaimer', title: '6. Disclaimer' },
  { id: 'link-esterni', title: '7. Link a Siti Esterni' },
  { id: 'legge-applicabile', title: '8. Legge Applicabile' },
  { id: 'modifiche', title: '9. Modifiche ai Termini' },
  { id: 'contatti', title: '10. Contatti' },
];

export default function TerminiCondizioni() {
  return (
    <LegalLayout
      title="Termini e Condizioni"
      subtitle="Condizioni generali di utilizzo del sito web di RDSS Santana Group"
      lastUpdated="Aprile 2026"
      sections={sections}
    >
      <Section id="accettazione" title="1. Accettazione dei Termini">
        <p>
          Accedendo e utilizzando il sito web <strong>santanagroup.com</strong> (il "Sito"), gestito da <strong>RDSS Santana Group SRL</strong> (la "Società"), con sede legale in Av. Padre Abreu, La Romana, República Dominicana 22000, l'utente accetta integralmente e senza riserve i presenti Termini e Condizioni di utilizzo.
        </p>
        <p>
          Se non accetti questi termini, ti invitiamo a non utilizzare il Sito. L'uso continuato del Sito dopo la pubblicazione di eventuali modifiche costituisce accettazione delle stesse.
        </p>
      </Section>

      <Section id="descrizione" title="2. Descrizione dei Servizi">
        <p>
          RDSS Santana Group è un'azienda specializzata in <strong>costruzione, architettura e design di interni</strong> in Repubblica Dominicana. Il Sito è destinato a:
        </p>
        <ul>
          <li>Presentare i servizi e il portfolio della Società</li>
          <li>Fornire informazioni sui progetti realizzati</li>
          <li>Permettere agli utenti di contattare la Società per richieste commerciali</li>
          <li>Comunicare la presenza territoriale e le location operative</li>
        </ul>
        <p>
          Il Sito è di natura informativa e non costituisce un'offerta contrattuale vincolante. Qualsiasi accordo commerciale è soggetto a contratto separato.
        </p>
      </Section>

      <Section id="proprieta-intellettuale" title="3. Proprietà Intellettuale">
        <p>
          Tutti i contenuti presenti sul Sito — inclusi, a titolo esemplificativo, testi, immagini, fotografie, loghi, marchi, grafica, video, codice sorgente e layout — sono di proprietà esclusiva di RDSS Santana Group SRL o dei rispettivi titolari dei diritti, e sono protetti dalle leggi sulla proprietà intellettuale applicabili in Repubblica Dominicana e a livello internazionale.
        </p>
        <p>
          È vietato riprodurre, distribuire, modificare, trasmettere, riutilizzare, pubblicare o utilizzare a fini commerciali i contenuti del Sito senza previa autorizzazione scritta della Società.
        </p>
        <p>
          Il logo RDSS Santana Group e tutti i marchi correlati sono marchi registrati della Società. Qualsiasi utilizzo non autorizzato è espressamente vietato.
        </p>
      </Section>

      <Section id="uso-accettabile" title="4. Uso Accettabile">
        <p>Utilizzando il Sito, l'utente si impegna a:</p>
        <ul>
          <li>Non utilizzare il Sito per scopi illegali o non autorizzati</li>
          <li>Non tentare di accedere a sistemi o dati non destinati all'utente</li>
          <li>Non trasmettere virus informatici, malware o altro codice dannoso</li>
          <li>Non effettuare scraping, crawling automatizzato o raccolta massiva di dati</li>
          <li>Non interferire con il corretto funzionamento del Sito</li>
          <li>Non impersonare altre persone o entità</li>
          <li>Non inviare spam o comunicazioni non richieste tramite il modulo di contatto</li>
        </ul>
        <p>
          La Società si riserva il diritto di segnalare alle autorità competenti qualsiasi attività illecita rilevata.
        </p>
      </Section>

      <Section id="limitazione" title="5. Limitazione di Responsabilità">
        <p>
          Nella misura massima consentita dalla legge applicabile, RDSS Santana Group SRL non sarà responsabile per:
        </p>
        <ul>
          <li>Danni diretti, indiretti, incidentali, speciali o consequenziali derivanti dall'uso o dall'impossibilità di usare il Sito</li>
          <li>Errori, omissioni o inesattezze nei contenuti del Sito</li>
          <li>Interruzioni, malfunzionamenti o indisponibilità temporanea del Sito</li>
          <li>Perdita di dati o profitti derivanti dall'uso del Sito</li>
          <li>Azioni di terze parti connesse all'utilizzo del Sito</li>
        </ul>
        <p>
          La responsabilità complessiva della Società, ove applicabile, non potrà in alcun caso superare l'importo di 100,00 USD.
        </p>
      </Section>

      <Section id="disclaimer" title="6. Disclaimer">
        <p>
          Le informazioni contenute nel Sito sono fornite "così come sono", senza garanzie di alcun tipo, esplicite o implicite. La Società non garantisce che il Sito sia privo di errori, virus o altri componenti dannosi, né che l'accesso al Sito sia ininterrotto.
        </p>
        <p>
          I contenuti del portfolio e i progetti descritti sono presentati a scopo illustrativo. Le specifiche tecniche, i tempi e i costi dei lavori sono soggetti a valutazione individuale e contratto separato.
        </p>
        <p>
          Le fotografie presenti nel Sito possono includere immagini di stock o render di progetto. I risultati effettivi possono variare.
        </p>
      </Section>

      <Section id="link-esterni" title="7. Link a Siti Esterni">
        <p>
          Il Sito può contenere link a siti web di terze parti. Questi link sono forniti unicamente per comodità dell'utente. La Società non ha controllo su tali siti e non è responsabile dei loro contenuti, politiche sulla privacy o pratiche.
        </p>
        <p>
          La presenza di un link a un sito esterno non implica l'approvazione o l'endorsement da parte di RDSS Santana Group dei contenuti di quel sito.
        </p>
      </Section>

      <Section id="legge-applicabile" title="8. Legge Applicabile e Foro Competente">
        <p>
          I presenti Termini e Condizioni sono disciplinati dalle leggi della <strong>República Dominicana</strong>. Per eventuali controversie relative all'interpretazione o esecuzione dei presenti Termini, le parti si impegnano a tentare una soluzione amichevole.
        </p>
        <p>
          In caso di mancato accordo, le controversie saranno devolute alla competenza esclusiva del Tribunale competente di La Romana, República Dominicana, salvo diverso accordo scritto tra le parti o obblighi di legge diversi applicabili ai consumatori residenti nell'Unione Europea.
        </p>
      </Section>

      <Section id="modifiche" title="9. Modifiche ai Termini">
        <p>
          RDSS Santana Group SRL si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. Le modifiche avranno efficacia immediata dalla loro pubblicazione sul Sito.
        </p>
        <p>
          Si raccomanda di consultare periodicamente questa pagina per verificare eventuali aggiornamenti. L'utilizzo continuato del Sito dopo la pubblicazione delle modifiche costituisce accettazione dei nuovi Termini.
        </p>
      </Section>

      <Section id="contatti" title="10. Contatti">
        <p>Per qualsiasi domanda relativa ai presenti Termini e Condizioni:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@santanagroup.com">info@santanagroup.com</a></li>
          <li><strong>Indirizzo:</strong> Av. Padre Abreu, La Romana, República Dominicana 22000</li>
          <li><strong>Telefono:</strong> +1 (809) 000-0000</li>
        </ul>
        <p className="mt-6 text-sm">
          Consulta anche:{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>
          {' '}·{' '}
          <Link to="/cookie-policy">Cookie Policy</Link>
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
