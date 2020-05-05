import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default ({data}) => (
    <Layout>
        <div>
          <Helmet>
            <script src="https://www.google.com/recaptcha/api.js"></script>
          </Helmet>
            <h2>Si quieres contactar conmigo</h2>
            <p>
                Si tienes cualquier consulta o problema puedes escribirme en cualquiera de las redes sociales que están 
                en el footer o en este formulario de contacto. Te respondere lo más rápido posible.
            </p>
            <form className="flex" action="https://getform.io/f/0cbdffcd-da6a-40ae-873c-1843ad03f253" method="POST">
              <div className="col-medium">
                <div className="formgroup">
                  <label htmlFor="name">
                    Nombre
                    <input className="formcontrol" type="text" name="name" id="name" />
                  </label>
                </div>
                <div className="formgroup">
                  <label htmlFor="email">
                    Correo electrónico
                    <input className="formcontrol" type="email" name="email" id="email" />
                  </label>
                </div>
                <div className="formgroup">
                  <label htmlFor="tel">
                    Teléfono
                    <input className="formcontrol" type="tel" name="tel" id="tel" />
                  </label>
                </div>
              </div>
              <div className="col-medium">
                <div className="formgroup">
                  <label htmlFor="problem">
                    Problema
                    <textarea className="formcontrol textarea" rows="7" name="problem" id="problem"/>
                  </label>
                </div>
              </div>
              <div className="col-fullwidth text-center">
                <div className="formgroup">
                  <div className="g-recaptcha text-center" data-sitekey={data.site.siteMetadata.contact.reCAPTCHA_key}></div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </div>
            </form>
        </div>
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata{
        contact {
          reCAPTCHA_key
        }
      }
    }
  }
`