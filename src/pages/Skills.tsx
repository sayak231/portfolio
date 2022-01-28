import { forwardRef } from "react";
import Redux from "../assets/icons/Redux";
import TypeScript from "../assets/icons/TypeScript";
import VSCode from "../assets/icons/VSCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faCar } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJsSquare,
  faNodeJs,
  faGithub,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { personalData } from "./../constants/personal-data";

interface SkillsProps {
  width: number;
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>(({ width }, divRef) => {
  return (
    <div ref={divRef} id="skills">
      <div className="left-skills">
        <div className="a-right">
          <h1 className="a-title">
            {width < 868
              ? personalData.skills.mobileTitle
              : personalData.skills.laptopTitle}
          </h1>
          <p className="a-sub">{personalData.skills.sub}</p>
          {width > 868 && <p className="a-desc">{personalData.skills.main}</p>}
        </div>
      </div>
      <div className="section">
        <div className="wall">
          <div className="v-boxes">
            <div className="box">
              <span className="tooltip">JavaScript</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">React</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faReact} color="#61DBFB" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Node JS</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Redux</span>
              <div className="box-face">
                <div className="box-text">
                  <Redux className="redux" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes second">
            <div className="box">
              <span className="tooltip">GitHub</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faGithub} color="#171515" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">TypeScript</span>
              <div className="box-face">
                <div className="box-text">
                  <TypeScript
                    height={width < 868 ? "20" : "35"}
                    width={width < 868 ? "20" : "35"}
                    className="redux"
                  />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">VSCode</span>
              <div className="box-face">
                <div className="box-text">
                  <VSCode className="redux" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes third">
            <div className="box">
              <span className="tooltip">HTML5</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">CSS3</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faCss3} color="#2965f1 " />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes forth">
            <div className="box link">
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faCar} color="#DC143C " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
