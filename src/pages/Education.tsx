import { forwardRef } from "react";

const Education = forwardRef<HTMLDivElement>((_, eduRef) => {
  return (
    <div ref={eduRef} id="education">
      Education
    </div>
  );
});

export default Education;
