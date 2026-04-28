import Head from "next/head";
import Layout from "../components/Layout";
import { events, formatEventDate } from "../data/events";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ulrike Exner — Cloud Solution Architect & Software/DevOps Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://rike.dev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Rike (Ulrike Exner) — Manager at EY in Berlin. Cloud and AI solution architecture, Software & DevOps engineering. Workshops and talks on cloud, DevOps, and modern web engineering."
        />
      </Head>

      <Layout>
        <section className="hero">
          <div className="container">
            <h1 className="greeting reveal">Hallo.</h1>
            <p className="lede reveal">
              I'm Rike — Ulrike Exner if we're being formal. Manager at <em>EY Technology Consulting</em> in
              Berlin. Day to day that's Cloud and AI solution architecture, hands-on
              Software &amp; DevOps engineering, with project leadership and business
              development woven in. On the side, I teach what I learn: workshops, talks,
              the occasional university lecture.
            </p>
            <div className="actions reveal">
              <a href="#contact">Get in touch&nbsp;↗</a>
              <a href="#talks">Talks &amp; workshops</a>
            </div>
          </div>
        </section>

        <section className="what" id="work">
          <div className="container">
            <div className="section-label">What I do</div>
            <div className="grid">
              <div>
                <h3>Architecture</h3>
                <p>
                  Solution architecture for cloud workloads on Azure and GCP. Platform
                  engineering, IaC, GitOps, CI/CD — the load-bearing work.
                </p>
              </div>
              <div>
                <h3>Delivery &amp; Practice</h3>
                <p>
                  Project leadership and business development at EY. Translating client
                  problems into delivered platforms — and into engagements that stick.
                </p>
              </div>
              <div>
                <h3>Teaching</h3>
                <p>
                  Workshops, talks, and university lectures on cloud, DevOps, and modern
                  web engineering — in English or German.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="selected" id="talks">
          <div className="container">
            <div className="section-label">Selected talks &amp; workshops</div>
            <ul>
              {events.map((item, i) => (
                <li key={`${item.date}-${i}`}>
                  <span className="date">{formatEventDate(item.date)}</span>
                  <span className="title">{item.titleEn}</span>
                  <span className="kind">
                    {item.kindEn} · {item.venue}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <h2>Let's talk.</h2>
            <a href="mailto:hello@rike.dev" className="email">
              hello@rike.dev
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
