import React from "react";
import '../App.css';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HomeBanner from "../components/HomeBanner.js";
import About from "../components/About.js";
import Fun from "../components/Fun";
import Resume from "../components/Resume";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function HomePage(){
    return(       
  <div>
  {/* page loading */}
  <div id="loading">
    <div className="load-circle"><span className="one" /></div>
  </div>
  {/* end page loading */}
  <Header></Header>
  {/* Main */}
  <main>
    <HomeBanner></HomeBanner>
    <About></About>
    <Fun></Fun>
    <Resume></Resume>
    <Work></Work>
    <Testimonials></Testimonials>
    <Contact></Contact>
  </main>
  <Footer></Footer>
</div>
    );
}