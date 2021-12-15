import { colors } from "./colours";

const { BLACK, WHITE } = colors;

export const iconStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#ffffff",
  color: "#000000",
  border: "3px solid #000000",
  borderRadius: "50%",
};

export const contentStyle = {
  boxShadow: "2px 2px 20px -2px #ddd",
  background: BLACK,
  color: WHITE,
};

export const contentArrowStyle = {
  borderRight: `16px solid ${BLACK}`,
};
