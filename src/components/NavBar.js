import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo-anh.svg";
import SocialButton from "./SocialButtons";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);

    // remove scroll event when component unmount from DOM
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(val) {
    setActiveLink(val);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} atl="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => onUpdateActiveLink("skills")}
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => onUpdateActiveLink("projects")}
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <SocialButton />
            <button
              className="vvd"
              onClick={() => (window.location.href = "#section")}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
