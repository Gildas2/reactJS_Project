import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "../components/About";
import Contact from "../components/Contact";
import Fun from "../components/Fun";
import HomeBanner from "../components/HomeBanner";
import Resume from "../components/Resume";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";
import HomePage from "../Pages/HomePage";

export default function MonRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="home" element={<HomeBanner/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="work" element={<Work/>}/>
                <Route path="resume" element={<Resume/>}/>
                <Route path="testimonials" element={<Testimonials/>}/>
                <Route path="fun" element={<Fun/>}/>
            </Routes>
        </BrowserRouter>
    );
}