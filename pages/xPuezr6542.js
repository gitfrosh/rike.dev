import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

class Prelaunch extends React.Component {
  render() {

    return (
      <>
        <Layout location={this.props.location}>
          <section id="page-content" className="block spacer p-top-xl">
            <div className="wrapper">
              <center>
                <h4>

                  Vielen Dank für dein Abo! 🎉

                </h4>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>Hier geht's zur kostenlosen Web Developer Roadmap:</p>
                <p>
                  <Link href={`/rike.dev-Roadmap.pdf`}>

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
