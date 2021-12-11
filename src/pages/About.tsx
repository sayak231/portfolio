import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((_, aboutRef) => {
  return (
    <div ref={aboutRef} id="about">
      About
    </div>
  );
});

export default About;
