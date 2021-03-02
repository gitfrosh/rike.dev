import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PageTitleHome from '../blocks/page-title/PageTitleHome';
import Blog from '../components/blog/blog';
import Projects from '../components/projects/Projects';

import Contacts from '../blocks/contacts/Contacts';

class RootIndex extends React.Component {
  state = {
    posts: get(this, 'props.data.allContentfulPost.edges'),

  }
  render() {
    return (
      <>
        <Layout location={this.props.location}>
          <Helmet>
            <html lang="en" />
            <title>rike.dev - Web development and beyond | Ulrike Exner</title>
            <meta name="description" content="I'm Ulrike Exner (or just Rike) and I am a software developer from Berlin, Germany with a focus on web technologies." />
            <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="5bd23855-029f-459b-a72d-6d41c3ea3d13" data-blockingmode="auto" type="text/javascript"></script>
          </Helmet>
          <script id="CookieDeclaration" src="https://consent.cookiebot.com/5bd23855-029f-459b-a72d-6d41c3ea3d13/cd.js" type="text/javascript" async></script>
          <PageTitleHome image={this.props.data.file.childImageSharp.fluid} />
          <Contacts />
          <Projects />
          <br />
          <Blog posts={this.state.posts} />
        </Layout>

      </>
    )
  }
}

export default RootIndex


export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPost(sort: {order: DESC, fields: publishedAt}) {
      edges {
        node {
          title
          language
          category
          slug
          description {
            description
          }
          publishedAt(formatString: "Do MMMM, YYYY")
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
     file(relativePath: { eq: "rike_exner.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
