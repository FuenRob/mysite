import React from "react"
import CookieConsent from "react-cookie-consent";
import Header from "./header"
import Footer from "./footer"
import Banner from "../components/bannerHome"
import SEO from "./SEO"

// GraphQL
import { useStaticQuery, graphql } from "gatsby"

export default ({ isHome, children }) => {
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
            <SEO />
            <Header title={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks}></Header>
            {!!isHome ? <Banner /> : null}
            <div className="container">{children}</div>
            <Footer />
            <CookieConsent buttonText="Lo entiendo" buttonStyle={{ background: "rebeccapurple", color: "white", fontSize: "13px" }}>
                Este sitio web utiliza cookies para mejorar la experiencia del usuario.
            </CookieConsent>
        </div>
    )
}
    