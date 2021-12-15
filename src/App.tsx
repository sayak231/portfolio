import "./App.scss";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Homepage from "./pages/Homepage";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { useRef } from "react";

const App: React.FC = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const executeScroll = (
    e: React.SyntheticEvent,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    e.preventDefault();
    ref.current!.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const executeScrollSkill = (e: React.SyntheticEvent) => executeScroll(e, skillRef);
  const executeScrollExperience = (e: React.SyntheticEvent) =>
    executeScroll(e, experienceRef);
  const executeScrollProjects = (e: React.SyntheticEvent) =>
    executeScroll(e, projectsRef);
  const executeScrollContact = (e: React.SyntheticEvent) => executeScroll(e, contactRef);
  const executeScrollAbout = (e: React.SyntheticEvent) => executeScroll(e, aboutRef);
  const executeScrollHome = (e: React.SyntheticEvent) => executeScroll(e, homeRef);

  return (
    <div className="app">
      <Navbar
        executeScrollSkill={executeScrollSkill}
        executeScrollExperience={executeScrollExperience}
        executeScrollProjects={executeScrollProjects}
        executeScrollContact={executeScrollContact}
        executeScrollAbout={executeScrollAbout}
        executeScrollHome={executeScrollHome}
      />
      <div className="page-sections">
        <Homepage ref={homeRef} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
