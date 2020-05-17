/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `@FuenRob`,
    titleTemplate: `FuenRob - Blog de desarrollo`,
    description: `Un blog personal sobre curiosidades y conocimientos de un desarrollador web`,
    siteUrl: "https://www.fuenrob.com",
    image: "/favicon.ico", 
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
    contact: {
      reCAPTCHA_key: `6LesFu4UAAAAAORkhM-zPnykd4NqLWAq4v_YKLr_`
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
   }
  ],
  pathPrefix: `/`,
}
