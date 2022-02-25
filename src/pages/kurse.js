import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Events from '../components/events/events';
import Modal from 'react-modal';
import Image from 'gatsby-image';
import { submit } from '../util/helpers';

const customStyles = {
    content: {
        zIndex: 2,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

class Kurse extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: undefined,
            modalIsOpen: false,
            events: get(this, 'props.data.allContentfulEvent.edges'),
            callback: undefined
        }

    }

    setCallback = (callback) => {
        this.setState({
            callback: callback
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(e)
        submit(this.state.email, this.setCallback)
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }
    changeEmail = (e) => {
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }
    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            email: undefined,
            callback: undefined
        })
        this.setState({
        })
    }
    render() {




        return (
            <>
                <Layout location={this.props.location}>
                    <Helmet
                        link={[
                            { rel: 'canonical', href: "https://rike.dev/kurse/" }
                          ]}
                          meta={[
                            {
                              name: 'description',
                              content: "Lerne in kleinen Kursen jetzt alles was du für deinen Einstieg in die Webentwickung brauchst: persönlich, professionell praxisnah & nur für Frauen",
                            },
                          ]}>
                          <html lang="de" />
                          <title>rike.dev - Webentwicklung: Kurse für Frauen</title>
                    </Helmet>
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
                                                <Image alt="Workshops & Kurse" fluid={this.props.data.file.childImageSharp.fluid} className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col align-self-center description">
                                        <h4>Dein Weg in die Web-Entwicklung</h4>

                                        <p>Du hast Lust, dich im Bereich Programmierung oder Web-Entwicklung weiterzubilden, aber weißt einfach nicht, wo du anfangen sollst? Ich biete regelmäßig Kurse, Workshops und Webinare für Interessierte und Anfängerinnen* an. Schau in die Veranstaltungsliste unten oder bei <a rel="noopener noreferrer"
                                            target="_blank" href="https://discover-code.net"><span className="line" style={{ color: '#2b2b2b' }} >discover:code</span></a> vorbei.</p>
                                    </div>
                                </div>
                            </div>
                            <br /><br /><br />
                            <center>

                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body p-large">
                                            <h5>Deine Roadmap jetzt kostenlos</h5>
                                            <p className="p-small mt-0"><span><br />Sichere dir die <b>kostenlose</b>{' '}
                                                Web Developer Roadmap als PDF. Erfahre, welches Wissen du brauchst, um dich im Bereich Web-Entwicklung fit zu machen.</span></p>
                                            <p><br /><button onClick={this.openModal} className="btn btn-sm has-text-color has-white-color has-background has-gray-background-color">Download</button></p>
                                        </div>
                                    </div>
                                </div>
                            </center>
                            <Events lang={"de"} events={this.state.events} />

                            {/* <Awards />  */}
                        </div>
                    </section>
                    <section>

                        <center>
                            <p style={{ marginTop: '3rem' }} className="p-small">* Die Zielgruppe schließt ein: Frauen, inter, nichtbinär, trans und agender Personen.</p>
                        </center>

                    </section>

                </Layout>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <section style={{ width: '50rem' }} id="page-content" className="spacer p-top-lg p-bottom-lg">
                        <div className="wrapper">
                            {this.state.callback ?
                                <center>
                                    <p>{this.state.callback}</p>
                                    <br />
                                    <br />
                                    <p> <button onClick={this.closeModal} className="btn btn-xs has-background has-white-background-color">Schließen</button></p>
                                </center> : <center>
                                    <h5>Deine Roadmap jetzt kostenlos</h5>
                                    <br />
                                    <p>Erfahre Schritt für Schritt, welche Teilbereiche, Technologien und Tools es rund um das Thema Web-Entwicklung zu entdecken gibt.</p>
                                    <br />
                                    <div className="input-with-icon text-center">
                                        <form onSubmit={(e) => this.submitForm(e)}>

                                            <span className="gutter-width">
                                                <input name="email"
                                                    type="email"
                                                    value={this.state.email}
                                                    onChange={this.changeEmail}
                                                    size="30"
                                                    maxLength="100"
                                                    required="required"
                                                    placeholder="E-Mail-Adresse *" />
                                            </span>
                                            <br /><br />
                                            <center><button type="submit" className="btn btn-sm has-text-color has-white-color has-background has-gray-background-color">
                                                Download
                                            </button></center>
                                        </form></div><br />
                                    <p style={{ marginTop: '3rem' }} className="p-small">Mit deiner Anmeldung stimmst du außerdem zu, dass ich dir unregelmäßig
                                        meinen Newsletter zum Thema #WomenWhoCode zusende.<br />
                                        Mehr zum Thema{' '}
                                        <a href="https://rike.dev/legal">Datenschutz</a>.</p>

                                    <p><br /><button onClick={this.closeModal} className="btn btn-xs has-background has-white-background-color">Abbrechen</button></p>
                                </center>}
                        </div>
                    </section>
                </Modal>
            </>
        )
    }
}

export default Kurse


export const pageQuery = graphql`
  query EventsQuery {
    allContentfulEvent(sort: {order: DESC, fields: date}) {
      edges {
        node {
            id
            date
            event
            dateEnd
            titleDe
            titleEn
            type
            link
            registrationOpen
            language
            slides
            abstractDe {
              id
            }
          }
      }
    }
    file(relativePath: { eq: "workshops.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
`
