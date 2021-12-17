import { forwardRef } from "react";
import Realistic from "../components/Confetti";
import Me from "../assets/about.webp";
import { personalData } from "../constants/personal-data";

const About = forwardRef<HTMLDivElement>((_, aboutRef) => {
  return (
    <div ref={aboutRef} id="about">
      <div className="custom-shape-divider-top-1639551048">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="Gradient">
              <stop offset="5%" stopColor="#11998e" />
              <stop offset="50%" stopColor="#38ef7d" />
              <stop offset="60%" stopColor="#38ef7d" />
              <stop offset="95%" stopColor="#11998e" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card bg1">
            <img src={Me} alt="Clicked by my friend NSN" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">{personalData.about.title}</h1>
          <p className="a-sub">{personalData.about.sub}</p>
          <p className="a-desc">{personalData.about.main}</p>
          <div className="a-award">
            <Realistic />
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
