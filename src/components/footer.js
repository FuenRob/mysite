import React from "react"
import '../utils/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
    <footer className="mt-3 pb-3">
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
        
        
    </footer>
)
