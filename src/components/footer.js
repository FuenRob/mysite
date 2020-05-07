import React from "react"
import '../utils/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"

export default () => (
    <footer className="mt-3">
        <hr className="mb-3" />
        <div className="text-center">
            <ul className="justify-center flex">
                <li className="list-item">
                    <a href="https://twitter.com/FuenRob" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="https://github.com/FuenRob" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="https://www.linkedin.com/in/robercmorais/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="https://medium.com/@fuenrob" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'medium']} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="https://dev.to/fuenrob" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'dev']} />
                    </a>
                </li>
            </ul>
        </div>
        <div className="text-center">
            <ul className="justify-center flex">
                <li className="list-item">
                    <Link to="/aviso-legal" className="small-text">
                        Aviso legal
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="/politica-de-privacidad" className="small-text">
                        Política de privacidad
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="/politica-de-cookies" className="small-text">
                        Política de cookies
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="/condiciones-de-uso" className="small-text">
                        Condiciones de uso
                    </Link>
                </li>
            </ul>
        </div>
    </footer>
)
