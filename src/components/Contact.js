import React from "react";

export default function Contact(){
    return(
        <div>
            <section id="contactus" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                <div className="col-md-12">
                    <div className="section-title">
                    <h3 className="dark-color text-uppercase">CONTACTEZ-NOUS</h3>
                    <p className="text-uppercase small">un développeur web &amp; mobile basé au Burkina Faso</p>
                    </div>
                </div>
                </div>
                {/* form */}
                <div className="row justify-content-center">
                <div className="col-lg-8 m-15px-tb">
                    <div className="contact-form box-shadow">
                    <h4 className="dark-color font-alt m-20px-b">Message</h4>
                    <form id="contact-form" method="POST">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <input name="Name" id="name" placeholder="Nom *" className="form-control" type="text" />
                            <span className="input-focus-effect theme-bg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                            <span className="input-focus-effect theme-bg" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                            <input name="Subject" id="subject" placeholder="Sujet *" className="form-control" type="text" />
                            <span className="input-focus-effect theme-bg" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                            <textarea name="message" id="message" placeholder="Votre message *" rows={3} className="form-control" defaultValue={""} />
                            <span className="input-focus-effect theme-bg" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="send">
                            <button className="m-btn m-btn-theme" onclick="send_mail()" type="button" value="Send"> send message</button>
                            </div>
                            <span id="suce_message" className="text-success" style={{display: 'none'}}>Message Sent Successfully</span>
                            <span id="err_message" className="text-danger" style={{display: 'none'}}>Message Sending Failed</span>
                        </div>
                        </div>
                    </form>
                    </div>
                </div> {/* col */}
                <div className="col-lg-4 m-15px-tb">
                    <div className="contact-info media box-shadow">
                    <div className="icon">
                        <i className="ti-location-pin" />
                    </div>
                    <div className="media-body">
                        <h6 className="dark-color font-alt">Notre Adresse</h6>
                        <p>Rue 12 Ouagadougou , Burkina Faso 750065.</p>
                    </div>
                    </div>
                    <div className="contact-info media box-shadow">
                    <div className="icon">
                        <i className="ti-mobile" />
                    </div>
                    <div className="media-body">
                        <h6 className="dark-color font-alt">Notre Numéro de télephone</h6>
                        <p>Office: +226 67434035<br />
                        Office: +226 67434035<br /></p>
                    </div>
                    </div>
                    <div className="contact-info media box-shadow">
                    <div className="icon">
                        <i className="ti-email" />
                    </div>
                    <div className="media-body">
                        <h6 className="dark-color font-alt">Notre Adresse email</h6>
                        <p>samnegildas4@gmail.com<br />contact@domainname.com</p>
                    </div>
                    </div>
                </div>
                </div>
                {/* end form */}
            </div>
            </section>
        </div>
    )
}