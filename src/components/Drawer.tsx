import { headers } from "./../constants/headers";

interface DrawerProps {
  active: string;
  handleClose: React.MouseEventHandler<HTMLUListElement>;
  executeScrollSkill: () => void;
  executeScrollExperience: () => void;
  executeScrollContact: () => void;
  executeScrollHome: () => void;
  executeScrollAbout: () => void;
  executeScrollEducation: () => void;
  executeScrollProjects: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  active,
  handleClose,
  executeScrollSkill,
  executeScrollExperience,
  executeScrollContact,
  executeScrollHome,
  executeScrollAbout,
  executeScrollEducation,
  executeScrollProjects,
}) => {
  const { HOMEPAGE, ABOUT, EXPERIENCE, SKILLS, EDUCATION, PROJECTS, CONTACT } = headers;

  return (
    <div className={`drawer ${active}`}>
      <ul onClick={handleClose}>
        <li onClick={executeScrollHome}>{HOMEPAGE}</li>
        <li onClick={executeScrollAbout}>{ABOUT}</li>
        <li onClick={executeScrollExperience}>{EXPERIENCE}</li>
        <li onClick={executeScrollSkill}>{SKILLS}</li>
        <li onClick={executeScrollEducation}>{EDUCATION}</li>
        <li onClick={executeScrollProjects}>{PROJECTS}</li>
        <li onClick={executeScrollContact}>{CONTACT}</li>
      </ul>
    </div>
  );
};

export default Drawer;