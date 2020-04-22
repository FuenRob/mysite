import React from "react"
import CookieConsent from "react-cookie-consent";
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
            <CookieConsent buttonText="Lo entiendo" buttonStyle={{ background: "rebeccapurple", color: "white", fontSize: "13px" }}>
                Este sitio web utiliza cookies para mejorar la experiencia del usuario.
            </CookieConsent>
        </div>
    )
}
    