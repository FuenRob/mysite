import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

export default ({ id, slug, title, date, excerpt, cover }) => {
    return (
        <article key={id}>
            <Link className="link" to={slug}>
                {!!cover ? <Img className="article-image" sizes={cover.childImageSharp.sizes} /> : null}
                <div className="article-body">
                    <h2 className="subtitle">
                        {title}
                    </h2>
                    <p>{excerpt}</p>
                    <span className="font-grey initial"> Publicado el {date}</span>
                </div>
            </Link>
        </article>
    )
}
