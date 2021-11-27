import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Link } from "gatsby";

class Prelaunch extends React.Component {
  render() {

    return (
      <>
        <Layout location={this.props.location}>
          <Helmet>
            <title>rike.dev</title>
          </Helmet>

          <section id="page-content" className="block spacer p-top-xl">
            <div className="wrapper">
                <center>
            <h4>
                
                        Thank you for your subscription! 🎉

                      </h4>
                      <br />
            <br />
            <br />
            <br />
            <br />
                      <p><em>Do you speak German?</em> <br />Hier geht's zur kostenlosen Web Developer Roadmap:</p>
                      <p>
                        <Link to={`/rike.dev-Roadmap.pdf`}>

                          <button className="btn btn-lg has-text-color has-white-color has-background has-gray-background-color">
                            Download
                          </button></Link></p>
                          </center>
            </div>
      
          </section>

        </Layout>

      </>
    )
  }
}

export default Prelaunch
