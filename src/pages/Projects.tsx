import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((_, projectsRef) => {
  return (
    <div ref={projectsRef} id="projects">
      Projects
    </div>
  );
});

export default Projects;
