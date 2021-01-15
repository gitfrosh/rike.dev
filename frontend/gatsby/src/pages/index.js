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
    siteTitle: get(this, 'props.data.site.siteMetadata.title'),
    posts: get(this, 'props.data.allContentfulPost.edges'),

  }
  render() {
    return (
      <>
        <Layout location={this.props.location}>
          <Helmet title={this.state.siteTitle} />
          <PageTitleHome />
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
    site {
      siteMetadata {
        title
      }
    }
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
  }
`
