import React from "react";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 m-10px-tb">
                <div className="nav justify-content-center justify-content-md-start">
                    <a href="index-03.html#"><i className="fab fa-facebook-f" /></a>
                    <a href="index-03.html#"><i className="fab fa-twitter" /></a>
                    <a href="index-03.html#"><i className="fab fa-instagram" /></a>
                    <a href="index-03.html#"><i className="fab fa-linkedin-in" /></a>
                    <a href="index-03.html#"><i className="fab fa-pinterest" /></a>
                </div>
                </div>
                <div className="col-md-6 m-10px-tb text-center text-md-right">
                <p>© 2023 copyright all right reserved</p>
                </div>
            </div>
            </div>
    </footer>
    );
}