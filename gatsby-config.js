require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'rike.dev - Web development and beyond',
    siteUrl: `https://rike.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/dev-404-page/`,
          `/404/`,
          `/legal/`,
          `/404.html`,
          `/xPuezr6542`,
          `/offline-plugin-app-shell-fallback/`, `/xPuezr6542/`, `/rike.dev-Roadmap.pdf`, `/rike.dev-Syllabus.pdf`, `/rike.dev-Webinar.pdf`],
        // additionalSitemaps: [{
        //   name: `kurse`,
        //   url: `https://rike.dev/kurse/sitemap.xml`,
        // },]
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-QX5B1LBNY2', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        // googleTagManager: {
        //   trackingId: 'G-QX5B1LBNY2', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
        //   dataLayerName: 'dataLayer', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production']
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rike.dev - Web development & beyond`,
        short_name: `rike.dev`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icons/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://rike.dev',
        sitemap: 'https://rike.dev/sitemap.xml',
        policy: [{ userAgent: '*', disallow: ['/kurse/rike.dev-Syllabus.pdf', '/kurse/rike.dev-Roadmap.pdf', '/kurse/buchung-bestaetigt', '/kurse/xPuezr6542', '/legal'] }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
