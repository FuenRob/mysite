/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `@FuenRob`,
    titleTemplate: `FuenRob - Blog de desarrollo web`,
    description: `Un blog personal sobre curiosidades y conocimientos de un desarrollador web`,
    siteUrl: "https://www.fuenrob.com",
    image: "static/favicon.ico", 
    twitterUsername: "@FuenRob",
    menuLinks:[
      {
        name:'Blog',
        link:'/blog'
      },
      {
          name:'Sobre mí',
          link:'/about'
      },
      {
          name:'Contacto',
          link:'/contact'
      }
    ],
    comments: {
      GATSBY_DISQUS_NAME: `fuenrob`
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "nofollow"
          }
        }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163936148-1",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.fuenrob.com/',
        sitemap: 'https://www.fuenrob.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "FuenRob - Blog de desarrollo web",
        short_name: "@FuenRob",
        start_url: "/",
        icon: "static/favicon.ico",
        cache_busting_mode: 'none'
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
          workboxConfig: {
            globPatterns: ['**/*']
          }
      }
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://24f75c0bcfe84e99b7e47370d9408dc9@o413157.ingest.sentry.io/5296692",
        sampleRate: 0.7,
      },
    }
  ],
  pathPrefix: `/`,
}
