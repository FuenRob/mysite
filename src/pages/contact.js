import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Link } from "gatsby"

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
                    Nombre*
                    <input className="formcontrol" type="text" name="name" id="name" required />
                  </label>
                </div>
                <div className="formgroup">
                  <label htmlFor="email">
                    Correo electrónico*
                    <input className="formcontrol" type="email" name="email" id="email" required />
                  </label>
                </div>
                <div className="formgroup">
                  <label htmlFor="tel">
                    Teléfono*
                    <input className="formcontrol" type="tel" name="tel" id="tel" required />
                  </label>
                </div>
              </div>
              <div className="col-medium">
                <div className="formgroup">
                  <label htmlFor="problem">
                    Problema*
                    <textarea className="formcontrol textarea" rows="7" name="problem" id="problem" required />
                  </label>
                </div>
              </div>
              <div className="col-fullwidth text-center">
               <p className="small-text">El * indica que el campo es requerido.</p>
                <div className="formgroup">
                  <div className="g-recaptcha text-center" data-sitekey={data.site.siteMetadata.contact.reCAPTCHA_key}></div>
                </div>
                <div className="formgroup">
                  <input type="checkbox" name="acceptConditions" required /> Acepto la <Link to="/politica-de-privacidad">política de privacidad</Link>.
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
