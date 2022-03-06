import React from "react";
import "./Home.scss";
import Intro from "./../Intro/Intro";
import Portfolio from "./../Portfolio/Portfolio";
import Works from "./../Works/Works";
import Testimonial from "./../Testimonial/Testimonial";
import Contact from "./../Contact/Contact";
import Footer from "./../../Footer/Footer";

export default function Home() {
  return (
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
