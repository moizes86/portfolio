import React from "react";

import { icons } from "../data";

export default function Skills() {
  return (
    <div className="section" id="skills">
      <h1>Skills</h1>
      <div className="icons-container pt-2">
        {Object.values(icons).map((icon) => (
          icon.showAsSkill && <img key={icon.title} src={icon.src} alt={icon.title} title={icon.title}/>
        ))}
      </div>
    </div>
  );
}
