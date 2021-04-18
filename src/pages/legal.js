import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Link } from "gatsby";
import PageTitleLegal from '../blocks/page-title/PageTitleLegal';

const getBrowserLanguage = () => {
    if (typeof navigator === `undefined`) {
        return "en";
    }

    const lang = navigator && navigator.language && navigator.language.split("-")[0];
    if (!lang) return "en";

    switch (lang) {
        case "de":
            return "de";
        default:
            return "en";
    }
};

const Legal = ({ location }) => {
    const lang = getBrowserLanguage();
    const [language, setLanguage] = useState(lang)

    return (
        <>
            <Layout location={location}>
                <Helmet>
                    <title>rike.dev - Contact</title>
                    <meta name="robots" content="noindex" />
                </Helmet>
                <section id="page-content" className="block spacer p-center-lg text-right">
                    <div className="wrapper">

                        <div className="button align-self-center">
                            <button onClick={() => setLanguage('de')} title="Deutsch" className="btn p-2 border-5 transform-scale-h"
                            >
                                {`${language === 'de' ? '+' : ''} Deutsch`}  </button>
                        </div>
                        <div className="button align-self-center">
                            <button onClick={() => setLanguage('en')} title="English" className="btn p-2 border-5 transform-scale-h"
                            >
                                {`${language === 'en' ? '+' : ''} English`} </button>
                        </div>
                    </div>
                </section>
                <PageTitleLegal language={language} />

                {language === 'de' &&
                    <section id="page-content" className="block spacer p-top-lg">
                        <div className="wrapper">
                            <p>
                                Ulrike Exner, Wichertstr. 30a, 10439 Berlin, Germany
            <br />
            Email: hello[at] rike.dev<br />
                            </p>
                            <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                            <p>s. oben</p>

                            <h3>Haftung für Inhalte
</h3>
                            <p>  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                                  </p>

                            <h3>Haftung für Links</h3>
                            <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
</p>
                            <h3>Urheberrecht
</h3>
                            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

                            <h3>Datenschutz
</h3>
                            <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>



                            <h3>Cookies / Google Analytics</h3>
                            <p>
                                Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website Google Analytics eingesetzt, ein Webanalysedienst der Google LLC. Zuständiger Dienstanbieter in der EU ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Google Analytics verwendet Cookies, die eine Analyse der Benutzung unserer Webseiten durch Sie ermöglichen. Die mittels der Cookies erhobenen Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
</p>
                            <h3>
                                Newsletter
                    </h3>
                            <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter. Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den “Austragen”-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon unberührt.

Diese Website nutzt die Dienste von MailChimp für den Versand von Newslettern. Anbieter ist die Rocket Science Group LLC, 675 Ponce De Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA. MailChimp ist ein Dienst, mit dem u.a. der Versand von Newslettern organisiert und analysiert werden kann. Wenn Sie Daten zum Zwecke des Newsletterbezugs eingeben (z.B. E-Mail-Adresse), werden diese auf den Servern von MailChimp in den USA gespeichert. MailChimp verfügt über eine Zertifizierung nach dem “EU-US-Privacy-Shield”. Der “Privacy-Shield” ist ein Übereinkommen zwischen der Europäischen Union (EU) und den USA, das die Einhaltung europäischer Datenschutzstandards in den USA gewährleisten soll. Mit Hilfe von MailChimp können wir unsere Newsletterkampagnen analysieren. Wenn Sie eine mit MailChimp versandte E-Mail öffnen, verbindet sich eine in der E-Mail enthaltene Datei (sog. web-beacon) mit den Servern von MailChimp in den USA. So kann festgestellt werden, ob eine Newsletter-Nachricht geöffnet und welche Links ggf. angeklickt wurden. Außerdem werden technische Informationen erfasst (z.B. Zeitpunkt des Abrufs, IP-Adresse, Browsertyp und Betriebssystem). Diese Informationen können nicht dem jeweiligen Newsletter-Empfänger zugeordnet werden. Sie dienen ausschließlich der statistischen Analyse von Newsletterkampagnen. Die Ergebnisse dieser Analysen können genutzt werden, um künftige Newsletter besser an die Interessen der Empfänger anzupassen. Wenn Sie keine Analyse durch MailChimp wollen, müssen Sie den Newsletter abbestellen. Hierfür stellen wir in jeder Newsletternachricht einen entsprechenden Link zur Verfügung. Des Weiteren können Sie den Newsletter auch direkt auf der Website abbestellen. Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen, indem Sie den Newsletter abbestellen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters sowohl von unseren Servern als auch von den Servern von MailChimp gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon unberührt. Näheres entnehmen Sie den Datenschutzbestimmungen von MailChimp unter: https://mailchimp.com/legal/terms/.</p>

                            <h3>Ressourcen</h3>
                            <p>Template: Oxer by adveits</p>

                        </div>
                    </section>
                }


                {language === 'en' && <section id="page-content" className="block spacer p-top-lg">
                    <div className="wrapper">
                        <p>
                            Ulrike Exner, Wichertstr. 30a, 10439 Berlin, Germany
<br />
Email: hello[at] rike.dev<br />
                        </p>
                        <h3>                Limitation of liability for internal content
</h3>
                        <p>
                            The content of this site has been created with the greatest of care. I cannot, however, guarantee that the information in it is accurate, complete or up-to-date. As a service provider I am responsible under Section 6(1) of the German Media Services Inter-State Agreement and Section 8(1) of the German Teleservices Act for my own content on this site. Service providers are not however obliged to monitor third party information transmitted or stored on their site by them or to look for circumstances which may suggest a violation of the law. This does not affect my statutory obligations to remove or block the use of information. My liability in such cases shall however commence from the time I become aware of an actual violation. On becoming aware of such violations I shall remove this content immediately.

                </p>
                        <p>This website contains links to external third-party websites, over the content of which I have no control. I cannot, therefore, make any guarantees regarding this third-party content. Responsibility for the content of linked sites lies solely with the provider or operator of the site concerned. All linked sites were checked for possible violations of the law when they were linked to mine. At that time I was not aware of any content which may violate the law. However, I cannot be expected to monitor the content of linked sites on an ongoing basis unless I have reason to suspect a violation of the law. On becoming aware of such a violation I shall remove the respective link immediately.</p>

                        <h3>Copyright Website and Blog
</h3>

                        <p>The operator of this site makes every effort to respect the copyrights of outside parties and to employ his own material and material in the public domain. All content and material on this site created by the site operator is governed by German copyright law.  Downloads and copies of this site may be made for private, non-commercial use only. Reproduction, processing, distribution and any form of exploitation beyond that permitted by copyright law requires the written consent of the author or creator concerned. Contributions by third parties are identified as such. Should anyone become aware of a possible copyright infringement, I kindly request that you inform me of such. Upon becoming aware of such a violation I shall remove the respective content immediately.

</p>
                        <h3>Data protection</h3>
                        <p>As a rule the use of this website is possible without providing any personally relevant data. Any provision of personal data (e.g. name, address or email addresses) occurs entirely on a voluntary basis. These data will not be provided to any third parties without the user's express approval. Be aware that the transmission of data via the internet (e.g. communication by email) is subject to security gaps. Complete protection of data from unauthorized access by third parties is not possible. The use of contact details published under the statutory requirement to provide acknowledgements by third parties for the purpose of the transmission of unsolicited advertising and informational material is expressly opposed. The site operator expressly reserves the right to take legal action against the unsolicited mailing of advertising information by way of spamming or similar.

</p>
                        <h3>Google Analytics / Cookies</h3>
                        <p>If you consent, we use Google Analytics from Google LLC (1600 Amphitheater Parkway Mountain View, CA 94043, USA) to statistically analyze visitor data. Google Analytics uses targeted cookies.</p>

                        <h3>Newsletter</h3>
                        <p>We send out newsletters with MailChimp and use features of the MailChimp newsletter service of The Rocket Science Group, LLC, 675 Ponce de Leon Ave. NE, Suite 5000, Atlanta, GA 30308 USA to record newsletter subscriptions. Rocket Science Group LLC (MailChimp) maintains online platforms that enable our users to stay in touch with their subscribers, primarily via email. They allow users, to upload e-mail addresses, and other subscriber profile information, such as name, physical address, and other demographic information to the MailChimp database. This information is used to send emails and allow the use of certain other MailChimp features for these users. In accordance with the published privacy policy, MailChimp shares some information with third parties to provide and support the services that MailChimp provides to users. MailChimp also shares some information with third party advertisers to better understand users’ needs and interests so that more relevant content and targeted advertising can be provided to these users and other users.

</p>

                        <h3>Sources</h3>
                        <p>Template: Oxer by adveits</p>


                    </div>
                </section>}

            </Layout>

        </>
    )
}


export default Legal






