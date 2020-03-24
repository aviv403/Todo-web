import React from 'react'
import '../style.css'

const Navbar = ({ clearList }) => {
    const date = new Date();
    
    return(
        <div>
            <nav className="top-navbar red lighten-1">
                <div className="nav-wrapper">
                    <ul id="#" className="right hide-on-med-and-down">
                        <li>
                            <a href="mailto:test@example.com" title="Send an Email"><i className="material-icons">mail_outline</i></a>
                        </li>

                        <li onClick={() => window.print()}>
                            <a className="print" title="Print List"><i className="material-icons">print</i></a>
                        </li>
                    </ul>
                    
                    <a href="#" className="brand-logo center">Todo's</a>

                    <ul id="#" className="left hide-on-med-and-down">
                        <li onClick={clearList}><a>Clear List</a></li>
                    </ul>
                </div>
            </nav>

            <div className="navbar right">
                <p>© 2018-{date.getFullYear()}, Todos.Aviv.Yehuda, Inc. or its affiliates</p>
                
            </div>
        </div>
    )
}

export default Navbar