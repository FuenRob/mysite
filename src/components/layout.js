import React from "react"
import Header from "./header"
import Footer from "./footer"

// GraphQL
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        menuLinks {
                            name
                            link
                        }
                    }
                }
            }
        `
    )
    return (
        <div className="app">
            <Header title={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks}></Header>
            <div className="container">{children}</div>
            <Footer />
        </div>
    )
}
    