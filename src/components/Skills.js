import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import html5 from "../assets/img/html5.svg";
import css3 from "../assets/img/css3.svg";
import javascript from "../assets/img/javascript.svg";
import nodejs from "../assets/img/nodejs.svg";
import python from "../assets/img/python.svg";
import reactImg from "../assets/img/react.svg";
import restAPI from "../assets/img/rest-api.svg";
import sequelizeImg from "../assets/img/sequelize.svg";
import postgresImg from "../assets/img/postgreSQL.svg";
import djangoImg from "../assets/img/django.svg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Skills() {
  const skills = [
    {
      img: html5,
      name: "HTML5",
    },
    {
      img: css3,
      name: "CSS",
    },
    {
      img: javascript,
      name: "JavaScript",
    },
    {
      img: nodejs,
      name: "Node.js",
    },
    {
      img: python,
      name: "Python",
    },
    {
      img: reactImg,
      name: "React",
    },
    {
      img: restAPI,
      name: "Restful API",
    },
    {
      img: sequelizeImg,
      name: "Sequelize",
    },
    {
      img: postgresImg,
      name: "PostgreSQL",
    },
    {
      img: djangoImg,
      name: "Django ORM",
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
            </div>
            <p>Tech stack and skills</p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              {skills.map((skill, idx) => (
                <div className="item" key={idx}>
                  <img src={skill.img} atl="Image" />
                  <h5>{skill.name}</h5>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
