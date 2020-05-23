import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Article from "../components/article"

export default class BlogList extends React.Component {
  render() {
    console.log(this.props.pageContext)
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <h1 className="title">
          Blog
        </h1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Article key={node.id}
              id={node.id}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              cover={node.frontmatter.cover}
            />
          )
        })}
        <div className="flex">
          <div className="col-medium">
            {!isFirst && (
            <Link className="btn btn-primary" to={"/blog/" + prevPage} rel="prev">
              ← Previous Page
            </Link>
            )}
          </div>
          <div className="col-medium text-right">
            {!isLast && (
              <Link className="btn btn-primary" to={"/blog/" + nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {frontmatter: {date: {ne: null}}}
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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