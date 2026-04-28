import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

const detectLang = () => {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator?.language?.split("-")[0];
  return lang === "de" ? "de" : "en";
};

const Legal = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setLanguage(detectLang());
  }, []);

  return (
    <>
      <Head>
        <title>rike.dev — Legal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Layout>
        <section className="page">
          <div className="container">
            <h1 className="title">{language === "de" ? "Impressum" : "Legal"}</h1>

            {language === "de" ? (
              <div className="prose">
                <p>
                  Ulrike Exner
                  <br />
                  c/o IP-Management #9564
                  <br />
                  Ludwig-Erhard-Str. 18
                  <br />
                  20459 Hamburg
                  <br />
                  E-Mail: hello[at]rike.dev
                </p>

                <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>siehe oben</p>

                <h3>Haftung für Inhalte</h3>
                <p>
                  Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine
                  Gewähr übernommen werden. Als Diensteanbieterin bin ich gemäß § 7 Abs. 1
                  TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieterin jedoch
                  nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
                  zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>

                <h3>Haftung für Links</h3>
                <p>
                  Diese Website enthält Links zu externen Webseiten Dritter, auf deren
                  Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten
                  ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei
                  Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend
                  entfernt.
                </p>

                <h3>Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen
                  Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien
                  dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                  gestattet.
                </p>

                <h3>Datenschutz</h3>
                <p>
                  Die Nutzung dieser Webseite ist ohne Angabe personenbezogener Daten
                  möglich. Es werden keine Cookies gesetzt und kein Tracking eingesetzt.
                  Eine Kontaktaufnahme per E-Mail erfolgt freiwillig; übermittelte Daten
                  werden ausschließlich zur Bearbeitung der Anfrage verwendet und nicht an
                  Dritte weitergegeben.
                </p>
              </div>
            ) : (
              <div className="prose">
                <p>
                  Ulrike Exner
                  <br />
                  c/o IP-Management #9564
                  <br />
                  Ludwig-Erhard-Str. 18
                  <br />
                  20459 Hamburg, Germany
                  <br />
                  Email: hello[at]rike.dev
                </p>

                <h3>Liability for content</h3>
                <p>
                  The content of this site has been created with the greatest of care. I
                  cannot, however, guarantee that the information in it is accurate,
                  complete, or up-to-date. As a service provider I am responsible under
                  Section 7(1) of the German Telemedia Act (TMG) for my own content on
                  this site under the general laws.
                </p>

                <h3>Liability for links</h3>
                <p>
                  This website contains links to external third-party websites, over the
                  content of which I have no control. Responsibility for the content of
                  linked sites lies solely with the provider or operator of the site
                  concerned. On becoming aware of a violation, I will remove the link
                  immediately.
                </p>

                <h3>Copyright</h3>
                <p>
                  All content and material on this site created by the site operator is
                  governed by German copyright law. Downloads and copies of this site may
                  be made for private, non-commercial use only.
                </p>

                <h3>Data protection</h3>
                <p>
                  This site can be used without providing any personal data. No cookies
                  are set, and no tracking is in place. If you reach out by email, the data
                  you provide is used solely to handle your request and is not shared with
                  third parties.
                </p>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Legal;
