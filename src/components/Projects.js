import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projectImage1 from "../assets/img/project-img5.png";
import projectImage2 from "../assets/img/be-my-voice-proj.png";
import projectImage3 from "../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

function Projects() {
  const projects = [
    {
      title: "Positivitea",
      description: "Online tea shop full stack development",
      imgUrl: projectImage1,
      githubLink: "https://github.com/AnaniaDuo/ecommerce2024",
      websiteLink: "https://positivitea-69a34d16eeb8.herokuapp.com",
      techStack:
        "React, Node.js, Sequelize, Express, Redux, TailwindCSS, Heroku",
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
    // {
    //   title: "Positivitea3",
    //   description: "Online tea shop full stack development 2",
    //   imgUrl: projectImage3,
    // },
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
                skills in front-end and back-end development.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/* <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav> */}
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
