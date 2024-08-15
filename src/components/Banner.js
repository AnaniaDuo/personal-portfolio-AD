import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img-anh2.svg";

function Banner() {
  const toRotate = ["Web Developer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 20);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Anh <br />{" "}
              {text ? (
                <span className="wrap">{text}</span>
              ) : (
                <span className="invisible">text</span>
              )}
            </h1>
            <p>
              My nick name is Kaia. I'm a full-stack developer based in Maine,
              having graduated from the Grace Hopper Program at Fullstack
              Academy in 2022. I had 1.5 years experience working at a startup
              as a software engineer. Beyond my passion for coding, I love
              traveling and immersing myself in nature. I also might have a
              thing for Matcha and Ube drinks.
            </p>
            <a href="#section">
              <button>
                Let's connect <ArrowRightCircle size={25} />
              </button>
            </a>
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
