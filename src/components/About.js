import React from "react";

export default function About(){
    return(
        <div>
            {/* about us */}
            <section id="about" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                <div className="col-md-12">
                    <div className="section-title">
                    <h3 className="dark-color text-uppercase">A propos de moi</h3>
                    <p className="text-uppercase small">Un développeur &amp;Web et Mobile basé au Burkina Faso</p>
                    </div>
                </div>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-5 m-15px-tb">
                    <div className="about-me-img box-shadow">
                    <img src="static/img/21.jpg" title alt />
                    <div className="nav social-icon">
                        <a href="index-03.html#"><i className="fab fa-facebook-f" /></a>
                        <a href="index-03.html#"><i className="fab fa-twitter" /></a>
                        <a href="index-03.html#"><i className="fab fa-instagram" /></a>
                        <a href="index-03.html#"><i className="fab fa-linkedin-in" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7 m-15px-tb">
                    <div className="about-me">
                    <h4>Je suis Gildas SAMNE</h4>
                    <h6>Développeur <span className="theme-color">Web &amp; Mobile</span> développeur basé au <span className="theme-color">Burkina Faso</span></h6>
                    <p>En tant que développeur web et mobile, je suis là pour donner vie à vos idées. Avec une expertise dans la création de sites web élégants et d'applications mobiles performantes, je m'engage à vous fournir des solutions sur mesure. Mon objectif est de concevoir des expériences utilisateur exceptionnelles et de garantir que votre projet soit livré dans les délais et le budget convenus. Contactez-moi dès aujourd'hui pour commencer à concrétiser votre vision numérique. 💡💻📱🚀</p>
                    <div className="row about-list">
                        <div className="col-md-6">
                        <div className="media">
                            <label>Date d'anniversaire</label>
                            <p>30 Janvier 2000</p>
                        </div>
                        <div className="media">
                            <label>Age</label>
                            <p>23 ans</p>
                        </div>
                        <div className="media">
                            <label>Residence</label>
                            <p>Ouagadougou</p>
                        </div>
                        <div className="media">
                            <label>Adresse</label>
                            <p>Cissin, Burkina Faso</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="media">
                            <label>E-mail</label>
                            <p>samnegildas4@gmail.com</p>
                        </div>
                        <div className="media">
                            <label>Numéro de téléphone</label>
                            <p>67434035</p>
                        </div>
                        <div className="media">
                            <label>Skype</label>
                            <p>skype.0404</p>
                        </div>
                        <div className="media">
                            <label>Freelance</label>
                            <p>Available</p>
                        </div>
                        </div>
                    </div>
                    <div className="btn-bar">
                        <a className="m-btn m-btn-theme" href="https://drive.google.com/file/d/1zDR99EGrcBCvckwSWy8XPBPQuozu8k4X/view?usp=sharing"> Téléchager mon CV</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* end about us */}
        </div>
    )
}