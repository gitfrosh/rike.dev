import React from 'react'
import Layout from '../components/layout'
import Events from '../components/events/events'
import { fetchEvents } from '../util/cms'
import workshops from '../images/rike_exner-systain3r.jpg';
import Image from "next/legacy/image"
import Head from 'next/head'

const Kurse = ({ events }) => {


    return (
        <>
            <Head>
                <title>rike.dev - Webentwicklung & Web3: Workshops</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="canonical" href={'https://rike.dev/kurse/'} />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Workshops & Talks im Bereich Webentwicklung, Programmierung, Frontend, Web3 und Blockchain."
                />
            </Head>
            <Layout>
                <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div id="about" className="block">
                            <h2>
                                <span className="line">Kurse</span>,<br /> Workshops & Talks
                            </h2>

                            <div className="row bg-half-ring-left gutter-width-lg">
                                <div className="col align-self-top pl-0">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <Image
                                                src={workshops}
                                                className="img-fluid"
                                                alt="Workshops & Kurse"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col description">
                                    <h5>Web Development, agile Methoden und disruptive Technologien</h5>
                                    <p>
                                        Ich biete in unregelmäßigen Abständen Kurse, Workshops
                                        und Talks zu den Themen Web Development, React, Frontend, Agilität, Web3 & Blockchain an.
                                    </p>
                                    <p>
                                        &#11166; <a href="mailto: hello@rike.dev">Anfragen als Speaker / Trainer</a>
                                    </p>
                                </div>                                <div class="col-sm-4">


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
                        <Events lang={'de'} events={events} />
                    </div>
                </section>
                {/* <section>
                    <center>
                        <p style={{ marginTop: '3rem' }} className="p-small">
                            * Die Zielgruppe schließt ein: Frauen, inter, nichtbinär, trans
                            und agender Personen.
                        </p>
                    </center>
                </section> */}
            </Layout>
            {/* <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <section
                    style={{ width: '50rem' }}
                    id="page-content"
                    className="spacer p-top-lg p-bottom-lg"
                >
                    <div className="wrapper">
                        {callback ? (
                            <center>
                                <p>{callback}</p>
                                <br />
                                <br />
                                <p>
                                    {' '}
                                    <button
                                        onClick={() => closeModal()}
                                        className="btn btn-xs has-background has-white-background-color"
                                    >
                                        Schließen
                                    </button>
                                </p>
                            </center>
                        ) : (
                            <center>
                                <h5>wom3n hack Newsletter</h5>
                                <p>
                                    Mit deiner Anmeldung stimmst du zu, dass ich dir unregelmäßig
                                    (ca. 3x jährlich) meinen Newsletter zum Thema #WomenWhoCode
                                    zusende.
                                </p>
                                <br />
                                <div className="input-with-icon text-center">
                                    <form onSubmit={(e) => submitForm(e)}>
                                        <span className="gutter-width">
                                            <input
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={changeEmail}
                                                size="30"
                                                maxLength="100"
                                                required="required"
                                                placeholder="E-Mail-Adresse *"
                                            />
                                        </span>
                                        <br />
                                        <br />
                                        <center>
                                            <button
                                                type="submit"
                                                className="btn btn-sm has-text-color has-white-color has-background has-gray-background-color"
                                            >
                                                Absenden
                                            </button>
                                        </center>
                                    </form>
                                </div>
                                <br />
                                <p style={{ marginTop: '3rem' }} className="p-small">
                                    Mehr zum Thema <Link href="/legal">Datenschutz</Link>.
                                </p>

                                <p>
                                    <br />
                                    <button
                                        onClick={() => closeModal()}
                                        className="btn btn-xs has-background has-white-background-color"
                                    >
                                        Abbrechen
                                    </button>
                                </p>
                            </center>
                        )}
                    </div>
                </section>
            </Modal> */}
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
