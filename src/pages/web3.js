import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Image from 'gatsby-image';

class Web3 extends React.Component {
    constructor(props) {
        super(props);
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
                                content: "",
                            },
                        ]}>
                        <html lang="de" />
                        <title>rike.dev - Web3 development resources</title>
                    </Helmet>
                    <section style={{ marginTop: -60}} id="page-content" className="spacer">
                        <div className="wrapper">
                            <div id="about" className="block">
                                
                                <div className="row bg-half-ring-right gutter-width-lg">
                                    <div className="col align-self-top pl-0">
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <Image alt="Workshops & Kurse" fluid={this.props.data.file.childImageSharp.fluid} className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col align-self-center description">
                                        <p>As an engineer or advocate, you have maybe already heard of Web3 a lot lately.
                                             This new version of the World Wide Web is getting a lot of hype at the moment 
                                             and promotes the idea of decentralized protocols, known from blockchain technology.
                                             Below you'll find my notes from months of researching, building and reading about
                                             this space. <b>Have fun exploring!</b>
                                             <p style={{ marginTop: '3rem' }} className="p-small">If you can't see the embedded page, just visit <a href="https://rike-codes.notion.site/Web3-beyond-A-resources-collection-16358ac830ff4c8887ab5d7605ac8043" target="_blank">this Notion site.</a></p>

</p>                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </section>
                    <section style={{ marginTop: 30} } id="notion" id="page-content">
                    <iframe src="https://embednotion.com/embed/gqdcii9j"></iframe>
    

</section>
                    {/* <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="row gutter-width-lg with-pb-lg nth-last-child-3-pb-0">
                           
                                    <div key={"1"} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <h4>
                                                    <a className="d-block" href={""}>fsjfsdf</a>
                                                </h4>

                                                <p className="p-small">
                                                <a className="d-block" href={""}>fsjfsdf</a>
                                                </p>

                                                <p>Lorem upsum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div key={"1"} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <h4>
                                                    <a className="d-block" href={""}>fsjfsdf</a>
                                                </h4>

                                                <p className="p-small">
                                                <a className="d-block" href={""}>fsjfsdf</a>
                                                </p>

                                                <p>Lorem upsum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div key={"1"} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <h4>
                                                    <a className="d-block" href={""}>fsjfsdf</a>
                                                </h4>

                                                <p className="p-small">
                                                <a className="d-block" href={""}>fsjfsdf</a>
                                                </p>

                                                <p>Lorem upsum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div key={"1"} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <h4>
                                                    <a className="d-block" href={""}>fsjfsdf</a>
                                                </h4>

                                                <p className="p-small">
                                                <a className="d-block" href={""}>fsjfsdf</a>
                                                </p>

                                                <p>Lorem upsum</p>
                                            </div>
                                        </div>
                                    </div>
                              
                        </div>
                    </div>
                </section> */}

                </Layout>

            </>
        )
    }
}

export default Web3

export const pageQuery = graphql`
  query Web3Query {
    file(relativePath: { eq: "web3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
`