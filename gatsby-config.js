/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `@FuenRob`,
    titleTemplate: `Blog de desarrollo`,
    description: `Un blog personal sobre curiosidades y conocimientos de un desarrollador web`,
    url: "https://fuenrob.github.io/mysite",
    image: "/favicon.ico", 
    twitterUsername: "@FuenRob",
    menuLinks:[
      {
          name:'Sobre mí',
          link:'/about'
      },
      {
          name:'Contacto',
          link:'/contact'
      }
    ],
    contact: `fuenrob@gmail.com`
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
  ],
  pathPrefix: "/mysite",
}
