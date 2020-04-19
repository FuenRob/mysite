import React from "react"
import { Link } from "gatsby"

export default ({menuLinks}) => (
  <nav className="navigation">
    <ul className="nav flex">
      {menuLinks.map(link => (
        <li className="nav-item" key={link.name}>
          <Link className="item-name" to={link.link}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)