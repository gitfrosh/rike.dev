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
            <html lang="en, de" />
            <title>rike.dev - Web development and beyond</title>
            <meta name="description" content="I'm ulrike (or just rike) and I am a software developer from Berlin, Germany with a focus on web technologies." />
          </Helmet>
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
