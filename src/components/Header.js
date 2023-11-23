import React from "react";

export default function Header(){
    return(
    <header>
        <nav className="navbar header-nav header-dark navbar-expand-lg">
            <div className="container">
                {/* Brand */}
                <a className="navbar-brand" href="index.html">GILDAS <span className="theme-bg" /></a>
                {/* / */}
                {/* Mobile Toggle */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-toggle" aria-controls="navbar-collapse-toggle" aria-expanded="false" aria-label="Toggle navigation">
                <span />
                <span />
                <span />
                </button>
                {/* / */}
                {/* Top Menu */}
                <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
                <ul className="navbar-nav ml-auto">
                    <li><a className="nav-link active" href="index-03.html#home">Accueil</a></li>
                    <li><a className="nav-link" href="index-03.html#about">A propos</a></li>
                    <li><a className="nav-link" href="index-03.html#services">services</a></li>
                    <li><a className="nav-link" href="index-03.html#work">Portfolio</a></li>
                    <li><a className="nav-link" href="index-03.html#blog">Blog</a></li>
                    <li><a className="nav-link" href="index-03.html#contactus">Contact</a></li>
                </ul>
                </div>
                {/* / */}
            </div>{/* Container */}
        </nav> {/* Navbar */}
  </header>
    );
}