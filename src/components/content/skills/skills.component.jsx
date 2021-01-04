import React from "react";

import "./skills.styles.scss";

import { ReactComponent as SvgCSS } from "../../../assets/cv-skills/css.svg";
import { ReactComponent as SvgHTML } from "../../../assets/cv-skills/html5.svg";
import { ReactComponent as SvgJS } from "../../../assets/cv-skills/js.svg";
import { ReactComponent as SvgNPM } from "../../../assets/cv-skills/Npm-logo.svg";
import { ReactComponent as SvgReact } from "../../../assets/cv-skills/react.svg";
import { ReactComponent as SvgBootstrap } from "../../../assets/cv-skills/bootstrap.svg";
import { ReactComponent as SvgSass } from "../../../assets/cv-skills/sass.svg";
import Icon_StyledComponents from "../../../assets/cv-skills/styled-components.png";
import Icon_Node from "../../../assets/cv-skills/node.png";
import Icon_ExpressJS from "../../../assets/cv-skills/expressJS.png";
import Icon_Typescript from "../../../assets/cv-skills/typescript.png";
import Icon_Yarn from "../../../assets/cv-skills/yarn.png";
import Icon_AWS from "../../../assets/cv-skills/aws_amplify.png";
import Icon_Netlify from "../../../assets/cv-skills/netlify.png";
import Icon_Heroku from "../../../assets/cv-skills/heroku.png";
import Icon_Postman from "../../../assets/cv-skills/postman.png";

const Skills = () => {
  return (
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
          <img src={Icon_Yarn} alt="" className="icon" />
        </li>
        <li>
          <SvgSass className="icon" />
        </li>
        <li>
          <img src={Icon_StyledComponents} alt="" className="icon" />
        </li>
        <li>
          <img src={Icon_Node} alt="" className="icon" />
        </li>
        <li>
          <img src={Icon_ExpressJS} alt="" className="icon" />
        </li>
        <li>
          <img src={Icon_Typescript} alt="" className="icon" />
        </li>
        <li>
          <img src={Icon_AWS} alt="" className="icon" />
        </li>
        <li>
          <img src={Icon_Netlify} alt="" className="icon" />
        </li>
        <li>
          <img src={Icon_Heroku} alt="" className="icon" />
        </li>
        <li>
          <img src={Icon_Postman} alt="" className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
