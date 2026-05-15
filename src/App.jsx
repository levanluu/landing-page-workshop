const topics = [
  {
    number: '01',
    title: 'Budget alert',
    description: 'Start with spending control so the workshop stays safe and predictable.',
  },
  {
    number: '02',
    title: 'Resource group',
    description: 'Create a clean scope to organize everything for the lab.',
  },
  {
    number: '03',
    title: 'Storage account',
    description: 'Set up Azure Blob Storage as the destination for uploaded files.',
  },
  {
    number: '04',
    title: 'Node.js API',
    description: 'Deploy backend code to Azure App Service and connect it to storage.',
  },
  {
    number: '05',
    title: 'Database optional',
    description: 'If time allows, add a managed database walkthrough at the end.',
  },
];

const checklist = [
  'Azure subscription ready',
  'Azure Portal access',
  'Azure CLI or Cloud Shell',
  'Node.js installed for local testing',
];

function App() {
  return (
    <div className="page">
      <div className="noise" aria-hidden="true" />
      <header className="hero">
        <div className="eyebrow">Azure Hands-on Workshop</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Build the foundation for an Azure workshop.</h1>
            <p className="lede">
              This landing page is a simple static site for your Azure Static Web Apps deployment.
              It gives participants a clean overview of the workshop flow before the hands-on session starts.
            </p>

            <div className="actions">
              <a className="button primary" href="#topics">
                View agenda
              </a>
              <a className="button secondary" href="#checklist">
                See prerequisites
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <span className="hero-card-label">Workshop focus</span>
            <h2>Simple, static, deployable</h2>
            <p>
              No backend calls. No forms. Just a polished landing page that works well with Azure Static Web Apps.
            </p>
            <div className="hero-badges">
              <span>React</span>
              <span>Vite</span>
              <span>Static Web Apps</span>
            </div>
          </aside>
        </div>
      </header>

      <main className="content">
        <section className="section" id="topics">
          <div className="section-head">
            <p className="section-kicker">Agenda</p>
            <h2>Topics to cover during the workshop</h2>
            <p className="section-text">
              Keep the narrative short, move quickly into hands-on, and keep the app simple enough to deploy in a few minutes.
            </p>
          </div>

          <div className="topic-grid">
            {topics.map((topic) => (
              <article className="topic-card" key={topic.number}>
                <div className="topic-number">{topic.number}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-col">
          <div className="panel">
            <p className="section-kicker">Delivery</p>
            <h2>How to present it</h2>
            <ul className="bullet-list">
              <li>Open with the workshop goal and the resource flow.</li>
              <li>Show the agenda as a sequence, not as separate unrelated demos.</li>
              <li>Move from budget control to resource setup, then storage, then backend, then optional database.</li>
              <li>Keep the page open during the session as the “home” screen.</li>
            </ul>
          </div>

          <div className="panel accent">
            <p className="section-kicker">Checklist</p>
            <h2 id="checklist">Before you start</h2>
            <ul className="checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section footer-card">
          <p className="section-kicker">Outcome</p>
          <h2>A clean static page for Azure Static Web Apps</h2>
          <p className="section-text">
            This is intentionally lightweight so it is easy to brand, easy to maintain, and easy to deploy.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
