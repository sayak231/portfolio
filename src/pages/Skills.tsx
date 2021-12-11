import { forwardRef } from "react";

const Skills = forwardRef<HTMLDivElement>((_, divRef) => {
  return (
    <div ref={divRef} id="skills">
      Skills
    </div>
  );
});

export default Skills;
