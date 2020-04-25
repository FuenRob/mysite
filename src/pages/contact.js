import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => (
    <Layout>
        <div>
            <h2>Si quieres contactar conmigo</h2>
            <p>
                Añadiré pronto un formulario de contacto, pero por ahora, puedes escribirme por Twitter o directamente un <a href={`mailto: ${data.site.siteMetadata.contact}`}>email</a>
            </p>
        </div>
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact
      }
    }
  }
`
