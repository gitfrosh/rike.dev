import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PageTitleContacts from '../blocks/page-title/PageTitleContacts';
import ContactForm from '../components/form/ContactForm';

class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <>
      <Helmet title={siteTitle} />
      <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
              <PageTitleContacts />

                <section id="page-content" className="block spacer p-top-xl">
                    <div className="wrapper">
                        <div id="contacts" className="block">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                    <h2>Hi there, <br/>you can<br/> <span className="line">contact me</span> </h2>
                                    <p className="mt-0">for questions, requests, and anything else.</p>
                                </div>

                                <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                                    <div className="list-group list-group-horizontal-sm">
                                      
                                    </div>

                                    <div className="list-group list-group-horizontal-sm mt-0">
                                        <div className="list-group-item mb-0 pb-0">
                                            <h4>Email</h4>

                                            <p><a href="mailto:hello@yourdomain.com">hello(at)rike.dev</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block spacer p-top-xl">
                            <h2>.. or fill up a <span className="line">form</span></h2>

                            <ContactForm />
                        </div>
                    </div>
                </section>

      </Layout>
     
      </>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
