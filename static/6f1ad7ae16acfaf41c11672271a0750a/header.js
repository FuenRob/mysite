import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"

export default (props) => (
    <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 style={{ display: `inline` }}>{props.title}</h1>
        </Link>
        <Navbar />
    </header>
)