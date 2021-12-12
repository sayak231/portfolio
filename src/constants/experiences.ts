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

export const data = {
  title: "EXPERIENCES",
  experiences: [
    {
      date: "August 2020 - Present",
      designation: "Programmer Analyst",
      company: "Cognizant",
      location: "Kolkata, West Bengal",
      description:
        "Developing Front-end products for Walmart for their Supply Chain Management and Warehouse Management Systems according to required Business logics using React JS, Redux, Context API and customized design libraries. Also tested the applications using Jest, Enzyme and React Testing Library. Worked in an Agile methodology and utilized GitHub knowledge for version control. Trained in MERN Stack and built a Bus Booking Progressive Web App using the same.",
      icon: "work",
    },
    {
      date: "December, 2018 - January, 2019",
      designation: "SAP Review Intern",
      company: "ITC Limited",
      location: "Kolkata, West Bengal",
      description:
        "Trained on various basic aspects of SAP and ERP solutions and Review and structure of SAP codes architecture and their respective usage by employees were was built.",
      icon: "computer",
    },
    {
      date: "May, 2018",
      designation: "Web Development Trainee",
      company: "Globsyn Technologies",
      location: "Kolkata, West Bengal",
      description:
        "Trained on HTML, CSS, Bootstrap for Front-End and PHP on the back-end. Used MySQL for database management. Developed an online Food Delivery application using the above technologies.",
      icon: "internship",
    },
  ],
};
