import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
    return(
        <Layout>
            <h1 className="title">
                Page not Fount
            </h1>
            <p>
                Oooopppsss! The page you are trying to find seems to have been lost.
            </p>
            <Link className="link" to="/">
                Go home!
            </Link>
        </Layout>
    )
}