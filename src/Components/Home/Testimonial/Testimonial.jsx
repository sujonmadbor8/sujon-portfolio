import React from "react";
import "./Testimonial.scss";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      icon: "assets/twitter.png",
      img: "https://s3.amazonaws.com/fayetteville.church.of.christ/wp-content/uploads/2018/11/jim-durd2.jpg",
      desc: "sujon sit amet consectetur adipisicing elit. Aut, tempore!",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of Delka",
      icon: "assets/youtube.png",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQEfceEmdG4rNA/profile-displayphoto-shrink_100_100/0/1560350804684?e=1651104000&v=beta&t=sy1R6P5D1az5kKs6A10opXG2Bvxtke8vCTCLtdSFnYo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, tempore!",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      icon: "assets/linkedin.png",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQHYj_m7i3DdTg/profile-displayphoto-shrink_200_200/0/1516340490582?e=1646870400&v=beta&t=Zkai_IghJn1qavTClfMc1Z1gIEsJ9xE5KmdolTdlQj8",
      desc: "Ipsum dolor sit amet consectetur adipisicing elit. Aut, tempore!",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
