import { useState } from "react";
import Hamburger from "../assets/icons/Hamburger";
import Backdrop from "../components/Backdrop";
import Drawer from "../components/Drawer";
import Logo from "./../assets/icons/Logo";

type Active = "active" | "";
type FillColor = "white" | "#171717";

interface NavbarProps {
  executeScrollSkill: () => void;
  executeScrollExperience: () => void;
  executeScrollContact: () => void;
  executeScrollHome: () => void;
  executeScrollAbout: () => void;
  executeScrollEducation: () => void;
  executeScrollProjects: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  executeScrollSkill,
  executeScrollExperience,
  executeScrollContact,
  executeScrollHome,
  executeScrollAbout,
  executeScrollEducation,
  executeScrollProjects,
}) => {
  const [active, setActive] = useState<Active>("");
  const [fillColor, setFillColor] = useState<FillColor>("#171717");

  const handleHamburger = () => {
    setActive((prevActive) => (prevActive === "" ? "active" : ""));
    setFillColor((prevFillColor) => (prevFillColor === "#171717" ? "white" : "#171717"));
  };

  const handleClose = () => {
    handleHamburger();
  };

  return (
    <>
      <div className={`navbar ${active}`}>
        <div className="logo">
          <Logo
            onClick={executeScrollHome}
            height="50"
            width="50"
            fillColor={fillColor}
          />
        </div>
        <div className="hamburger-container">
          <Hamburger onClick={handleHamburger} className={`hamburger ${active}`} />
        </div>
      </div>
      <Drawer
        executeScrollSkill={executeScrollSkill}
        executeScrollExperience={executeScrollExperience}
        executeScrollContact={executeScrollContact}
        executeScrollHome={executeScrollHome}
        executeScrollAbout={executeScrollAbout}
        executeScrollEducation={executeScrollEducation}
        executeScrollProjects={executeScrollProjects}
        active={active}
        handleClose={handleClose}
      />
      {active === "active" && <Backdrop onClick={handleClose} />}
    </>
  );
};

export default Navbar;
