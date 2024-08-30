import React from 'react'
import Layout from '../components/layout'
import Events from '../components/events/events'
import { fetchEvents } from '../util/cms'
import coaching from '../images/coaching.jpg';
import Image from "next/legacy/image"
import Head from 'next/head'

const Kurse = () => {
    return (
        <>
            <Head>
                <title>rike.dev - Webentwicklung & Web3: Coaching</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="canonical" href={'https://rike.dev/coaching/'} />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Coaching für Quereinsteigerinnen und IT-Fachfrauen"
                />
            </Head>
            <Layout>
                <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div id="about" className="block">
                            <h2>
                                <span className="line">Coaching</span><br />
                            </h2>

                            <div className="row bg-half-ring-left gutter-width-lg">
                                <div className="col align-self-top pl-0">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <Image
                                                src={coaching}
                                                className="img-fluid"
                                                alt="Coaching"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col description">
                                    <h3>You belong in tech!</h3>
                                    <p>
                                        In einer Branche, die ständig wächst und spannende
                                        Möglichkeiten bietet, helfe ich dir, deinen Platz zu
                                        finden und erfolgreich durchzustarten. Ob du deine
                                        Karriere neu ausrichten möchtest oder gezielte
                                        Unterstützung auf deinem Weg suchst –
                                        mit meinem Coaching und Mentoring stehst du nicht allein.
                                    </p>
                                    <p>
                                        &#11166; <a href="https://tidycal.com/ulrike-exner" target="_blank">Jetzt Session buchen</a>
                                    </p>
                                </div>                                <div class="col-sm-4">

                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="row bg-half-ring-left gutter-width-md">
                                <div className="col align-self-top pl-0">
                                    <div
                                        style={{ border: "1px solid #7c989a", marginTop: "2rem" }}
                                        className="card-body p-large"
                                    >
                                        <h2>

                                            Career Boost: <span className="line"> IT-Mentoring für Frauen</span>
                                        </h2>
                                        <br />
                                        <p className="mt-0"><em>Frauen sind in der IT stark unterrepräsentiert. Nicht einmal jeder fünfte Job in der IT –
                                            laut Eurostat 17,5 Prozent – wird von Frauen besetzt. Auch die Entwicklung hin zur Industrie 4.0 hat dafür gesorgt,
                                            dass in sämtlichen Branchen IT-Talente gebraucht werden. Viele Wirtschaftszweige suchen also gerade händeringend nach
                                            IT-Fachkräften. </em><br /><br />
                                            <b>Du machst dir vielleicht schon länger Gedanken über einen IT-Quereinstieg?</b><br />
                                            <b>Du bist dir unsicher, was dich erwartet, welche Voraussetzungen du brauchst, oder wie du den richtigen Weg einschlägst?</b><br /> <br />
                                            Egal, ob du den Quereinstieg in die IT planst, dich in der Softwareentwicklung weiterentwickeln möchtest oder Expert:in für Web- und Cloud-Technologien werden willst – ich unterstütze dich auf deinem Weg. Mit meiner langjährigen Erfahrung in der agilen Softwareentwicklung und tiefem Wissen über die IT-Branche helfe ich dir, deine Ziele zu erreichen.

                                            Ob es um gezielte Karriereberatung, die Navigation durch die Herausforderungen des IT-Alltags oder die Entwicklung eines maßgeschneiderten Plans für deinen beruflichen Erfolg geht – ich bin an deiner Seite.
                                            <br /><br />
                                            <a href="https://tidycal.com/ulrike-exner" target="_blank"><h3>  &#11166; Let's talk!</h3></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <br />
                        <br />
                        <br /> */}
                        {/* <center>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body p-large">
                                        <h4>wom3n hack Newsletter</h4>
                                        <p className="p mt-0">
                                            <span>
                                                <br />
                                                Verpasse keine Kurse und Events sowie weitere spannende
                                                News zum Thema #WomenWhoCode mehr!
                                            </span>
                                        </p>
                                        <p>
                                            <br />
                                            <button
                                                onClick={() => openModal()}
                                                className="btn btn-sm has-text-color has-white-color has-background has-gray-background-color"
                                            >
                                                Abonnieren
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </center> */}
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default Kurse

export async function getStaticProps() {
    const res = await fetchEvents()
    const events = await res.map((p) => {
        return p.fields
    })
    return {
        props: {
            events,
        },
    }
}
