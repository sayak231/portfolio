import { forwardRef } from "react";
import HomeView from "../components/HomeView";
import Polygon from "../components/Polygon";

interface HomeProps {
  executeScrollAbout: (e: React.SyntheticEvent) => void;
}

const Homepage = forwardRef<HTMLDivElement, HomeProps>(
  ({ executeScrollAbout }, homeRef) => {
    return (
      <div ref={homeRef} id="homepage" onScroll={(e) => executeScrollAbout(e)}>
        <HomeView />
        <Polygon />
      </div>
    );
  },
);

export default Homepage;
