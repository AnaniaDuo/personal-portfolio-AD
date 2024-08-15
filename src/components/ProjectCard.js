import React from "react";
import { Col } from "react-bootstrap";
import externalLink from "../assets/img/external-link.svg";

function ProjectCard({ project }) {
  const {
    title,
    description,
    imgUrl,
    githubLink,
    websiteLink,
    videoDemoLink,
    techStack,
  } = project;

  function openNewTab(link) {
    window.open(link, "_blank", "noreferrer");
  }

  return (
    <Col md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p className="text-dark">Using {techStack}</p>
          <br />
          <button
            className="text-light"
            onClick={() => openNewTab(project.githubLink)}
          >
            <div className="d-flex justify-content-center align-items-center me-4 mt-2">
              <h5> Github</h5>
              <img src={externalLink} className="ms-1 pb-2 text-light" />
            </div>
          </button>
          {websiteLink && (
            <button
              className="text-light"
              onClick={() => openNewTab(websiteLink)}
            >
              <div className="d-flex justify-content-center align-items-center me-4">
                <h5> Website</h5>
                <img src={externalLink} className="ms-1 pb-2 text-light" />
              </div>
            </button>
          )}

          {videoDemoLink && (
            <button
              className="text-light"
              onClick={() => openNewTab(videoDemoLink)}
            >
              <div className="d-flex justify-content-center align-items-center me-4">
                <h5> Demo</h5>
                <img src={externalLink} className="ms-1 pb-2 text-light " />
              </div>
            </button>
          )}
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
