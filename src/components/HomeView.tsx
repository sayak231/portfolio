import { useEffect, useRef } from "react";
import { init } from "ityped";
import Me from "../assets/homepageImg.png";
import { itypedConfig } from "../constants/itypedConfig";
import { personalData } from "../constants/personal-data";

const HomeView = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    init(textRef.current!, itypedConfig);
  }, []);

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">{personalData.intro.caption}</h2>
          <h1 className="i-name">{personalData.intro.name}</h1>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default HomeView;
