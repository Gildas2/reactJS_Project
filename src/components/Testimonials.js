import React from "react";

export default function Testimonials(){
    return(
        <div>
            {/* Testiminails */}
            <section className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                <div className="col-md-12">
                    <div className="section-title">
                    <h3 className="dark-color text-uppercase">TÉMOIGNAGES</h3>
                    <p className="text-uppercase small">un développeur web &amp; mobile basé au Burkina Faso</p>
                    </div>
                </div>
                </div>
                <div className="owl-carousel" data-items={2} data-nav-dots="true" data-md-items={2} data-sm-items={1} data-xs-items={1} data-xx-items={1} data-space={30}>
                {/* testimonials */}
                <div className="testimonial-col-01">
                    <div className="media">
                    <div className="img">
                        <img src="static/img/team-1.jpg" title alt />
                    </div>
                    <div className="media-body p-25px-l">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div className="tc-info">
                        <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                        <span>Co-founder</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* / */}
                {/* testimonials */}
                <div className="testimonial-col-01">
                    <div className="media">
                    <div className="img">
                        <img src="static/img/team-2.jpg" title alt />
                    </div>
                    <div className="media-body p-25px-l">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div className="tc-info">
                        <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                        <span>Co-founder</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* / */}
                {/* testimonials */}
                <div className="testimonial-col-01">
                    <div className="media">
                    <div className="img">
                        <img src="static/img/team-3.jpg" title alt />
                    </div>
                    <div className="media-body p-25px-l">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div className="tc-info">
                        <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                        <span>Co-founder</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* / */}
                {/* testimonials */}
                <div className="testimonial-col-01">
                    <div className="media">
                    <div className="img">
                        <img src="static/img/team-4.jpg" title alt />
                    </div>
                    <div className="media-body p-25px-l">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div className="tc-info">
                        <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                        <span>Co-founder</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* / */}
                </div>
            </div>
            </section>
            {/* End Testiminails */}
        </div>
    )
}