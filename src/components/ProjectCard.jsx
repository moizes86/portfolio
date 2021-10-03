import React from "react";

export default function ProjectCard({ project: { title, thumb, stackIcons, summary, url, git } }) {
  return (
    <div
      className="card"
      key={title}
      onClick={() => {
        window.open(url, "_blank", "noopener noreferrer");
      }}
    >
      <img className="card-img-top" src={thumb} alt="Card cap" />
      <div className="card-body">
        <div>
          <div className="d-flex justify-content-between">
            <h5 className="">{title}</h5>
            <div className="links-container col-4 row justify-content-end">
              <a className="mr-2" href={url} target="_blank" rel="noopener noreferrer ">
                <i className="fas fa-external-link-alt text-success"></i>
              </a>
              <a href={git} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <i className="fab fa-github-square text-dark"></i>
              </a>
            </div>
          </div>
          <p className="card-text text-dark">{summary}</p>
        </div>

        <div className="stack-icons row">
          {stackIcons.map((icon, i) => (
            <img key={icon.title} className="mr-2" src={icon.src} title={icon.title} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
