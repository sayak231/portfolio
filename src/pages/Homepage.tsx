import { forwardRef } from "react";
import HomeView from "../components/HomeView";
import Polygon from "../components/Polygon";

const Homepage = forwardRef<HTMLDivElement>((_, homeRef) => {
  return (
    <div ref={homeRef} id="homepage">
      <HomeView />
      <Polygon />
    </div>
  );
});

export default Homepage;
