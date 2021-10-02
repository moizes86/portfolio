import React from "react";
import { contactInfo } from "../data";

export default function Footer() {
  return (
    <div className="footer bg-dark p-3 pt-5 text-light">
      <div className="container">
        <div className="contact-me pb-3 mb-5">
          <h3>Contact Me</h3>
          <ul>
            <li>
              <i className="fas fa-home"></i>
              Rehovot, Israel
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +972546892979
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              moshe.mn86@gmail.com
            </li>
          </ul>
        </div>
        <div className="icons-container">
          {contactInfo.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer noopener" className={item.title}>
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
