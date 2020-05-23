import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import { DiscussionEmbed } from "disqus-react"

export default ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const slug = post.fields.slug
  const disqusConfig = {
    shortname: data.site.siteMetadata.comments.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }
  return (
    <Layout>
      <div className="text-justify">
        {!!post.frontmatter.cover ? <Img className="h-300 mb-3" sizes={post.frontmatter.cover.childImageSharp.sizes} /> : null}
        <h1 className="title">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {!!post.frontmatter.date ? <DiscussionEmbed {...disqusConfig} /> : null}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        cover{
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        comments {
          GATSBY_DISQUS_NAME
        }
      }
    }
  }
`
