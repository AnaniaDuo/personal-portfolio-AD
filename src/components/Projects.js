import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projectImage1 from "../assets/img/positivitea-proj.png";
import projectImage2 from "../assets/img/be-my-voice-proj.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Positivitea",
      description: "Online tea shop full stack development",
      imgUrl: projectImage1,
      githubLink: "https://github.com/AnaniaDuo/ecommerce2024",
      websiteLink: "https://positivitea-69a34d16eeb8.herokuapp.com",
      videoDemoLink: "https://youtu.be/PC7cZwKuIok",
      techStack:
        "React, Node.js, Sequelize, Express, Redux, TailwindCSS, Animate.css, Heroku",
    },
    {
      title: "Be My Voice",
      description: "Interactive Wordle web app using ASL",
      imgUrl: projectImage2,
      githubLink: "https://github.com/2201gh-capstone-banana/2201gh-capstone",
      videoDemoLink: "https://youtu.be/sGxQxkb5rU0",
      techStack:
        "React, Node.js, Tensorflow.js, Sequelize, Express, Redux, React webcam, Heroku",
    },
  ];

  return (
    <div>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Below, you’ll find some of my key projects that highlight my
                passion for creating engaging web applications which showcase my
                skills in front-end and{" "}
                <span style={{ whiteSpace: "nowrap" }}>
                  back-end development
                </span>
                .
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((proj, idx) => (
                        <ProjectCard key={idx} project={proj} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second"> </Tab.Pane>
                  <Tab.Pane eventKey="third"> </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Projects;
