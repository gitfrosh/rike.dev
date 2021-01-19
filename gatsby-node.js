const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({ fromPath: "/about", toPath: "/legal", isPermanent: true })
  createRedirect({ fromPath: "/projects", toPath: "/", isPermanent: true })
  createRedirect({ fromPath: "/blog", toPath: "/#blog", isPermanent: true })
  createRedirect({ fromPath: "/2019/06/18/express-js-statische-website", toPath: "/2018/07/15/node-js-installieren-und-einen-webserver-starten", isPermanent: true })
  createRedirect({ fromPath: "/2019/06/18/node-js-und-npm-installieren", toPath: "/2018/07/15/node-js-installieren-und-einen-webserver-starten", isPermanent: true })
  createRedirect({ fromPath: "/2017/08/29/mit-dem-terminal-arbeiten-und-python-installieren", toPath: "/#blog", isPermanent: true })
  createRedirect({ fromPath: "/2017/07/28/mit-dem-terminal-arbeiten-und-python-installieren", toPath: "/#blog", isPermanent: true })
  createRedirect({ fromPath: "/img/uploads/06ca9125e5754d08a272cd91350ec8f7.pdf", toPath: "/06ca9125e5754d08a272cd91350ec8f7.pdf", isPermanent: true })
  createRedirect({ fromPath: "/img/uploads/2cfde365744a43028b90b8621fca16cd.pdf", toPath: "/2cfde365744a43028b90b8621fca16cd.pdf", isPermanent: true })


  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
