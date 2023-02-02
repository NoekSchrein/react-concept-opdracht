import "./Nav.css";
import React from 'react'
import {NavLink} from "react-router-dom";

function Nav({children}) {
    return (
        <header className="outer-container-header">
            <div className="inner-container">
                <nav className="nav-container">
                    <ul>
                        <li><NavLink to="/">Hottest Posts</NavLink></li>
                        <li><a href="https://www.reddit.com/">Reddit</a></li>
                        <li><NavLink to="/subreddit/memes">Memes</NavLink></li>
                    </ul>
                </nav>
                {children}
            </div>
        </header>
    );
};

export default Nav;
