import React from "react";
import "../styles.scss";

export default function About() {
  return (
    <div className="section" id="about">
      <div className="overlay absolute-position"></div>
      <div className="background-photo absolute-position"></div>
      <div className="box text-center">
        <img src="images/profile-image.jpg" alt="profile" />
        <p className="mt-4">
          Started coding via online courses, built the client side in a hackaton project with a team of
          developers, graduated WeCode bootcamp participating Experis and Reichman University. Ready for my
          first fullstack position.
        </p>
        <a href="#projects">
        <i className="fas fa-arrow-circle-down  text-dark"></i>
        </a>
      </div>
    </div>
  );
}
