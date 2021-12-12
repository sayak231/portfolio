export default interface Props {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  height?: string;
  width?: string;
  fillColor?: string;
}
