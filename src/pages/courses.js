import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Events from '../components/events/events';
import Image from 'gatsby-image';
import { submit } from '../util/helpers';

class Courses extends React.Component {

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
                            { rel: 'canonical', href: "https://rike.dev/courses/" }
                          ]}
                          meta={[
                            {
                              name: 'description',
                              content: "Courses and workshops for coding beginners - and empowering women by the way.",
                            },
                          ]}>
                          <html lang="de" />
                          <title>rike.dev - Web development courses, workshops & talks</title>
                    </Helmet>
                    <section id="page-content" className="spacer p-top-xl">
                        <div className="wrapper">
                            <div id="about" className="block">
                                <h2>
                                    <span className="line">Courses</span>,<br /> Workshops & Talks
                                </h2>

                                <div className="row bg-half-ring-left gutter-width-lg">
                                    <div className="col align-self-top pl-0">
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <Image alt="Workshops & Courses" fluid={this.props.data.file.childImageSharp.fluid} className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col align-self-center description">
                                        <h4>Would you like to dive into programming and software development as a newbie?</h4>

                                        <p>I love to inspire more women* to get into coding and try out web development. 
                                            Thus, I give workshops for beginners and host extensive trainings in German or English at irregular intervals.</p>
                                    </div>
                                </div>
                            </div>
                            <br /><br /><br />
                        
                            <Events lang={"en"} events={this.state.events} />
                        </div>
                    </section>
                    <section>

                        <center>
                            <p style={{ marginTop: '3rem' }} className="p-small">* This includes not only women, but also inter, nonbinary, trans und agender persons.</p>
                        </center>

                    </section>

                </Layout>
            
            </>
        )
    }
}

export default Courses;


export const pageQuery = graphql`
  query EnglishEventsQuery {
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
            language
            slides

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
