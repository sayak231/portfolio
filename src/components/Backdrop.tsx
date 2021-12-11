interface BackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <div onClick={onClick} className="backdrop" />;
};

export default Backdrop;
