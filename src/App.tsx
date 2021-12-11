import "./App.scss";
import About from "./pages/About";
import Education from "./pages/Education";
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
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const executeScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current!.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const executeScrollSkill = () => executeScroll(skillRef);
  const executeScrollExperience = () => executeScroll(experienceRef);
  const executeScrollEducation = () => executeScroll(educationRef);
  const executeScrollProjects = () => executeScroll(projectsRef);
  const executeScrollContact = () => executeScroll(contactRef);
  const executeScrollAbout = () => executeScroll(aboutRef);
  const executeScrollHome = () => executeScroll(homeRef);

  return (
    <div className="app">
      <Navbar
        executeScrollSkill={executeScrollSkill}
        executeScrollExperience={executeScrollExperience}
        executeScrollEducation={executeScrollEducation}
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
        <Education ref={educationRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
