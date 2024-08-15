import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-anh.svg";
import SocialButtons from "./SocialButtons";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} atl="Logo" />
          </Col>
          <Col sm={6}>
            <SocialButtons />
            <p>CopyRight© 2024. All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
