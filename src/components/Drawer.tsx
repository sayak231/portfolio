import { headers } from "./../constants/headers";

interface DrawerProps {
  active: string;
  handleClose: React.MouseEventHandler<HTMLUListElement>;
  executeScrollSkill: (e: React.SyntheticEvent) => void;
  executeScrollExperience: (e: React.SyntheticEvent) => void;
  executeScrollContact: (e: React.SyntheticEvent) => void;
  executeScrollHome: (e: React.SyntheticEvent) => void;
  executeScrollAbout: (e: React.SyntheticEvent) => void;
  executeScrollProjects: (e: React.SyntheticEvent) => void;
}

const Drawer: React.FC<DrawerProps> = ({
  active,
  handleClose,
  executeScrollSkill,
  executeScrollExperience,
  executeScrollContact,
  executeScrollHome,
  executeScrollAbout,
  executeScrollProjects,
}) => {
  const { HOMEPAGE, ABOUT, EXPERIENCE, SKILLS, PROJECTS, CONTACT } = headers;

  return (
    <div className={`drawer ${active}`}>
      <ul onClick={handleClose}>
        <li onClick={executeScrollHome}>{HOMEPAGE}</li>
        <li onClick={executeScrollAbout}>{ABOUT}</li>
        <li onClick={executeScrollExperience}>{EXPERIENCE}</li>
        <li onClick={executeScrollSkill}>{SKILLS}</li>
        <li onClick={executeScrollProjects}>{PROJECTS}</li>
        <li onClick={executeScrollContact}>{CONTACT}</li>
      </ul>
    </div>
  );
};

export default Drawer;
