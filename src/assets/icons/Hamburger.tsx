import "../../styles/hamburger.scss";

interface HamburgerProps {
  className: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick, className }) => {
  return (
    <div onClick={onClick} className={className}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </div>
  );
};

export default Hamburger;
