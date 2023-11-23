import React from "react";

export default function HomeBanner(){
    return(
        <div>
            {/* Home Banner */}
            <section id="home" className="home-banner-01">
            <div className="container">
                <div className="row full-screen align-items-center p-100px-tb">
                <div className="col-md-6">
                    <div className="ht-text">
                    <h6>Salut ici...</h6>
                    <h1>Gildas SAMNE</h1>
                    <h2>Je suis passionné par le développement<span id="type-it" /></h2>
                    <p></p>
                    <div className="btn-bar go-to">
                        <a className="m-btn m-btn-theme" href="index-03.html#work"> Mon travail</a>
                        <a className="m-btn m-btn-t-theme" href="index-03.html#contactus">Embauchez-moi</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="static/img/30.jpg" title alt />
                </div>
                </div>
            </div>
            <div className="go-to go-to-next">
                <a href="index-03.html#about">
                <span />
                </a>
            </div>
            </section>
        </div>
    )
}