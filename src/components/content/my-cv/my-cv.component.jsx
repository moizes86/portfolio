import React from "react";

import { ReactComponent as SvgCSS } from "../../../assets/cv-skills/css.svg";
import { ReactComponent as SvgHTML } from "../../../assets/cv-skills/html5.svg";
import { ReactComponent as SvgJS } from "../../../assets/cv-skills/js.svg";
import { ReactComponent as SvgNPM } from "../../../assets/cv-skills/Npm-logo.svg";
import { ReactComponent as SvgReact } from "../../../assets/cv-skills/react.svg";
import { ReactComponent as SvgBootstrap } from "../../../assets/cv-skills/bootstrap.svg";
import { ReactComponent as SvgSass } from "../../../assets/cv-skills/sass.svg";
import StyledComponentsIcon from '../../../assets/cv-skills/styled-components.png';

import "./my-cv.styles.scss";

const MyCV = () => {
  return (
    <div className="content-default">
      <div className="content-cv">
        <div className="download">
          <a href="/CV- Moshe Mantsur.pdf" download>
            Full Version (PDF)
          </a>
        </div>
        <div className="topic">
          <h1>Summary</h1>
          <p>
            Looking for my first job as a <b>front-end developer</b>. Main stack
            is Javascript and React. Learned independently via online courses.{" "}
          </p>
          <h1>Education</h1>
          <p>
            <b>2014: </b>
            Bachelor of <u>Middle Eastern Studies</u> (major track) and{" "}
            <u>State of Israel Studies</u> at <b>Ben-Gurion University</b>, GPA
            90.6.
          </p>
        </div>

        <div className="topic">
          <h1>Military Service</h1>
          <p>
            <b>2005-2008: </b>
            PC Technician, Head of <b>App and Hardware</b> team in the computers
            department of the <u>371 unit of communications</u> in the northern
            command.
          </p>
        </div>

        <div className="topic topic-skills">
          <h1>Skills</h1>
          <ul>
            <li>
              <SvgHTML className="icon" />
            </li>
            <li>
              <SvgCSS className="icon" />
            </li>
            <li>
              <SvgJS className="icon" />
            </li>
            <li>
              <SvgNPM className="icon" />
            </li>
            <li>
              <SvgReact className="icon" />
            </li>
            <li>
              <SvgBootstrap className="icon" />
            </li>
            <li>
              <SvgSass className="icon" />
            </li>
            <li>
              <img src={StyledComponentsIcon} alt=""  className="icon" />
            </li>
          </ul>
        </div>

        <div className="download">
          <a href="/CV- Moshe Mantsur.pdf" download>
            Full Version (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCV;
