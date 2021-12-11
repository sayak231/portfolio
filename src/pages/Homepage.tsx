import { forwardRef } from "react";

const Homepage = forwardRef<HTMLDivElement>((_, homeRef) => {
  return (
    <div ref={homeRef} id="homepage">
      Homepage
    </div>
  );
});

export default Homepage;
