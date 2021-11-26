import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PageTitleHome from '../blocks/page-title/PageTitleHome';
import Blog from '../components/blog/blog';
import Projects from '../components/projects/Projects';
import Contacts from '../blocks/contacts/Contacts';
const RootIndex = ({location}) => {
  const data = useStaticQuery(graphql`
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
`);

  const posts = data.allContentfulPost.edges;
  const image = data.file.childImageSharp.fluid
    return (
      <>
        <Layout location={location}>
          <Helmet
              link={[
                { rel: 'canonical', href: `https://rike.dev` }
              ]}>
            <html lang="en" />
            <title>rike.dev - Web development and beyond | Ulrike Exner</title>
            <meta name="description" content="I'm Ulrike Exner (or just Rike), fullstack developer from Berlin, hosting
             workshops for coding beginners." />
          </Helmet>
          <PageTitleHome image={image} />
          <Contacts />
          <Projects />
          <br />
          <Blog posts={posts} />
        </Layout>

      </>
    )
  
}

export default RootIndex


