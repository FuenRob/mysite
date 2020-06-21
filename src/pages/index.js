import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Article from "../components/article"

export default ({ data }) => {
  return (
    <Layout isHome={true}>
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
        <div className="text-center">
          <Link className="btn btn-primary" to="/blog">
            Ver más
          </Link>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
        filter: {frontmatter: {date: {ne: null}}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY", locale: "es")
            cover {
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
          excerpt
        }
      }
    }
  }
`
