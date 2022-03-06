import React, { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, tempore!",
      img: "https://jiristech.com/wp-content/uploads/2019/11/website-designing.jpg",
    },
    {
      id: "2",
      icon: "assets/globe.png",
      title: "Mobile Application",
      desc: "okhman, his wife and their son Sujon live with his step mother, step brother Solaiman and his pregnant wife whom",
      img: "https://cdn.educba.com/academy/wp-content/uploads/2019/12/Mobile-Application-Software.jpg",
    },
    {
      id: "3",
      icon: "assets/writing.png",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, tempore!",
      img: "https://media.crystallize.com/snowball/20/3/4/25/branding-mockup.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        onClick={() => handleClick("left")}
        className="arrow left"
        alt=""
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
