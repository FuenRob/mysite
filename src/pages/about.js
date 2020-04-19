import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Sobre {data.site.siteMetadata.title}</h1>
    <div className="text-justify">
      <p>
        FuenRob no es mi nombre real, que decepción ¿verdad? Mi verdadero nombre en Roberto Morais y soy un desarrollador web. 
        En mi día a día me dedico a programar en PHP en plataformas orientadas al ecommerce. Soy un espíritu inquieto y me encanta aprender cosas nuevas
        por eso me lancé a por esto, un blog propio en el que contaré experiencias con lenguajes, frameworks, quizás alguna anécdota y quién sabe, a lo
        mejor de algún proyecto futuro. Si quieres seguirme en mis redes sociales, en el footer de la web tienes los enlaces.
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
