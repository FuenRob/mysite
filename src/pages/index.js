import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Article from "../components/article"

export default ({ data }) => {
  return (
    <Layout>
        <h1 className="title">
          Mis publicaciones
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article key={node.id}
            id={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            cover={node.frontmatter.cover}
          />
        ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 100) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
