import { forwardRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Work from "./../assets/icons/Work";
import Internship from "./../assets/icons/Internship";
import Computer from "./../assets/icons/Computer";
import Star from "../assets/icons/Star";
import { contentArrowStyle, contentStyle, iconStyle } from "./../constants/experiences";
import { colors } from "./../constants/colours";
import { personalData } from "../constants/personal-data";
import Education from "../assets/icons/Education";
import School from "../assets/icons/School";
import Student from "../assets/icons/Student";

const Experience = forwardRef<HTMLDivElement>((_, experienceRef) => {
  const { BLACK } = colors;
  const getIcon = (icon: string) => {
    switch (icon) {
      case "work":
        return <Work fillColor={BLACK} />;
      case "internship":
        return <Internship fillColor={BLACK} />;
      case "computer":
        return <Computer fillColor={BLACK} />;
      case "education":
        return <Education fillColor={BLACK} />;
      case "school":
        return <School fillColor={BLACK} />;
      case "student":
        return <Student fillColor={BLACK} />;
      default:
        return <Star fillColor={BLACK} />;
    }
  };
  return (
    <div ref={experienceRef} id="experience">
      <h1>{personalData.experience.title}</h1>
      <VerticalTimeline lineColor={BLACK}>
        {personalData.experience.experiences.map(
          ({ date, designation, company, location, description, icon }) => (
            <VerticalTimelineElement
              key={company + designation}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              date={date}
              iconStyle={iconStyle}
              icon={getIcon(icon)}
            >
              <h2 className="vertical-timeline-element-title">{designation}</h2>
              <h3 className="vertical-timeline-element-title">{company}</h3>
              <h4 className="vertical-timeline-element-subtitle">{location}</h4>
              {description.length ? <p>{description}</p> : null}
            </VerticalTimelineElement>
          ),
        )}
        <VerticalTimelineElement
          iconStyle={iconStyle}
          icon={<Star fillColor={BLACK} />}
        />
      </VerticalTimeline>
    </div>
  );
});

export default Experience;
