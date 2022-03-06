import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web developer", "Web designer", "Data Analysis"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Md. Sujon</h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
          <a href="Resume.pdf" download="Sujon Resume.pdf">
            <button className="btn highlighted-btn">
              Get Resume <i class="fa fa-download"></i>
            </button>
          </a>
        </div>

        <a className="down" href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
