import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"

export default (props) => (
    <header className="header">
        <div className="navbar flex">
            <Link className="logo" to="/">
                {props.title}
            </Link>
            <Navbar menuLinks={props.menuLinks}/>
        </div>
    </header>
)