import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'cosa-sono', title: '1. Cosa Sono i Cookie' },
  { id: 'tipologie', title: '2. Tipologie di Cookie' },
  { id: 'cookie-usati', title: '3. Cookie Utilizzati' },
  { id: 'terze-parti', title: '4. Cookie di Terze Parti' },
  { id: 'gestione', title: '5. Gestione dei Cookie' },
  { id: 'preferenze', title: '6. Le Tue Preferenze' },
  { id: 'contatti', title: '7. Contatti' },
];

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Informativa sull'uso dei cookie e tecnologie di tracciamento sul sito web di RDSS Santana Group"
      lastUpdated="Aprile 2026"
      sections={sections}
    >
      <Section id="cosa-sono" title="1. Cosa Sono i Cookie">
        <p>
          I cookie sono piccoli file di testo che i siti web memorizzano sul dispositivo dell'utente durante la navigazione. Vengono utilizzati per far funzionare correttamente il sito, migliorare l'esperienza utente e raccogliere informazioni statistiche.
        </p>
        <p>
          Tecnologie simili ai cookie — come pixel, web beacon e local storage — possono essere utilizzate per scopi analoghi. Nel presente documento, ci riferiamo a tutte queste tecnologie con il termine "cookie".
        </p>
      </Section>

      <Section id="tipologie" title="2. Tipologie di Cookie">
        <div className="space-y-5">
          <CookieCategory
            label="Necessari"
            color="bg-white/15"
            desc="Indispensabili per il funzionamento del sito. Senza di essi alcune funzionalità non sarebbero disponibili. Non richiedono consenso."
          />
          <CookieCategory
            label="Analitici"
            color="bg-white/10"
            desc="Raccolgono informazioni anonime su come gli utenti utilizzano il sito (pagine visitate, tempo di permanenza, errori). Aiutano a migliorare le prestazioni."
          />
          <CookieCategory
            label="Funzionali"
            color="bg-white/8"
            desc="Permettono al sito di ricordare le scelte dell'utente (lingua, preferenze) per offrire un'esperienza personalizzata."
          />
          <CookieCategory
            label="Marketing"
            color="bg-white/5"
            desc="Utilizzati per mostrare annunci pertinenti agli interessi dell'utente. Possono essere condivisi con partner pubblicitari terzi."
          />
        </div>
      </Section>

      <Section id="cookie-usati" title="3. Cookie Utilizzati su Questo Sito">
        <p>La tabella seguente elenca i cookie presenti su questo sito:</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/15">
                <th className="text-left py-3 pr-4 font-semibold text-white/70 tracking-widest uppercase">Nome</th>
                <th className="text-left py-3 pr-4 font-semibold text-white/70 tracking-widest uppercase">Tipo</th>
                <th className="text-left py-3 pr-4 font-semibold text-white/70 tracking-widest uppercase">Durata</th>
                <th className="text-left py-3 font-semibold text-white/70 tracking-widest uppercase">Scopo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/6">
              {[
                { name: 'santana_cookie_consent', type: 'Necessario', duration: '12 mesi', desc: 'Salva le preferenze cookie dell\'utente' },
                { name: '_ga', type: 'Analitico', duration: '2 anni', desc: 'Google Analytics — distingue gli utenti' },
                { name: '_ga_*', type: 'Analitico', duration: '2 anni', desc: 'Google Analytics — mantiene lo stato della sessione' },
                { name: '_gid', type: 'Analitico', duration: '24 ore', desc: 'Google Analytics — distingue gli utenti' },
                { name: 'sb-*-auth-token', type: 'Necessario', duration: 'Sessione', desc: 'Autenticazione Supabase' },
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

      <Section id="terze-parti" title="4. Cookie di Terze Parti">
        <p>Alcuni cookie sono impostati da servizi di terze parti che appaiono sulle nostre pagine. Non abbiamo controllo diretto su questi cookie.</p>
        <ul>
          <li>
            <strong>Google Analytics</strong> — utilizziamo Google Analytics per analisi statistiche. Google può utilizzare i dati per i propri scopi pubblicitari. Informativa: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
          </li>
          <li>
            <strong>Instagram / Meta</strong> — il link al nostro profilo Instagram può comportare il caricamento di risorse Meta. Informativa: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a>
          </li>
        </ul>
      </Section>

      <Section id="gestione" title="5. Gestione dei Cookie tramite Browser">
        <p>Puoi gestire, disabilitare o eliminare i cookie direttamente dal tuo browser. Le istruzioni per i principali browser:</p>
        <ul>
          <li><strong>Google Chrome</strong> — Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
          <li><strong>Mozilla Firefox</strong> — Preferenze → Privacy e sicurezza → Cookie e dati dei siti</li>
          <li><strong>Safari</strong> — Preferenze → Privacy → Gestisci dati dei siti web</li>
          <li><strong>Microsoft Edge</strong> — Impostazioni → Cookie e autorizzazioni del sito</li>
        </ul>
        <p>
          Attenzione: la disabilitazione dei cookie necessari potrebbe compromettere il corretto funzionamento del sito.
        </p>
      </Section>

      <Section id="preferenze" title="6. Le Tue Preferenze">
        <p>
          Puoi modificare le tue preferenze cookie in qualsiasi momento tramite il banner che appare alla prima visita o cliccando sul pulsante qui sotto.
        </p>
        <button
          onClick={() => {
            localStorage.removeItem('santana_cookie_consent');
            window.location.reload();
          }}
          className="mt-4 inline-flex items-center gap-2 font-montserrat text-xs tracking-widest uppercase px-5 py-2.5 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-none"
        >
          Modifica preferenze cookie
        </button>
        <p className="mt-4">
          Per ulteriori informazioni sul trattamento dei dati personali, consulta la nostra <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </Section>

      <Section id="contatti" title="7. Contatti">
        <p>Per qualsiasi domanda relativa all'uso dei cookie su questo sito:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@santanagroup.com">info@santanagroup.com</a></li>
          <li><strong>Indirizzo:</strong> Av. Padre Abreu, La Romana, República Dominicana 22000</li>
        </ul>
        <p className="mt-6 text-sm">
          Consulta anche:{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>
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

function CookieCategory({ label, color, desc }: { label: string; color: string; desc: string }) {
  return (
    <div className={`flex items-start gap-4 p-4 border border-white/10 rounded-sm ${color}`}>
      <div className="flex-shrink-0 mt-0.5">
        <span className="font-montserrat text-xs font-bold tracking-widest uppercase text-white/70 border border-white/20 px-2 py-1 rounded-sm">
          {label}
        </span>
      </div>
      <p className="font-montserrat text-xs text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}
