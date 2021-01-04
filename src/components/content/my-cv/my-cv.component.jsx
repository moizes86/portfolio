import React from "react";
import Skills from '../skills/skills.component';

import "./my-cv.styles.scss";

const MyCV = () => {
  return (
    <div className="content-default">
      <div className="content-cv">
        <div className="download">
          <a href="/MosheMantsur_FE_Dev.pdf" download>
            Full Version (PDF)
          </a>
        </div>
        <div className="topic">
          <h1>Summary</h1>
          <p>Looking for a junior frontend position.</p>
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

        <Skills />

        <div className="download">
          <a href="MosheMantsur_FE_Dev.pdf" download>
            Full Version (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCV;
