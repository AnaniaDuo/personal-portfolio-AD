import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img-anh.png";
import resume from "../assets/resume/resume.pdf";

function Banner() {
  function onDownloadHandler() {
    console.log("download resume");

    // anchor link
    const element = document.createElement("a");
    element.href = resume;
    element.download = "AnhDuongResume.pdf";

    // simulate link click
    document.body.appendChild(element); // require this to work in Firefox
    element.click();
    // clean up - remove the element after triggering the download
    document.body.removeChild(element);
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Anh <br />
              <span className="wrap">Web Developer</span>
            </h1>
            <p>
              My nick name is Kaia. I'm a full-stack developer based in Maine,
              having graduated from the Grace Hopper Program at Fullstack
              Academy in 2022. I had 1.5 years experience working at a startup
              as a software engineer. Beyond my passion for coding, I love
              traveling and immersing myself in nature. I also might have a
              thing for Matcha and Ube drinks.
            </p>
            <button onClick={onDownloadHandler}>
              Download Resume <Download size={25} />
            </button>
          </Col>
          <Col>
            <img src={headerImage} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
