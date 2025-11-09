import React from "react";


const slides = [
  {
    id: 1,
    title: "Breathing Cells at the Seoul Biennale",
    meta: "UPDATE • INSTALLATION",
    image: "/images/slide1.jpg",
  },
  {
    id: 2,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: "/images/slide2.jpg",
  },
  {
    id: 3,
    title: "Harbin Opera House",
    meta: "PROJECT • ARCHITECTURE",
    image: "/images/slide3.jpg",
  },
];


const HomeView = () => {
  return (
    <div className="hero-crousal">
        {/* slides */}
      {slides.map((item, index) => (
        <div key={index}>
          <div className="overlay-info">
            <div className="meta">{item.meta}</div>
            <h2>{item.title}</h2>
            <a href="#" className="view-btn"></a>
          </div>
        </div>
      ))}
      <div className="progress-bar">
        <div className="fill"></div>
      </div>
      <div>
        {slides.map((_, i) => (
          <button key={i} className={`dot`}>
            button
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
