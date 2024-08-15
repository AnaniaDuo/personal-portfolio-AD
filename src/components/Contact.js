import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import axios from "axios";
function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  function onChangeHandler(name, value) {
    setFormDetails({ ...formDetails, [name]: value });
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await axios.post(
      `${process.env.REACT_APP_API_URL}/contact`,
      {
        ...formDetails,
      }
    );

    setFormDetails(formInitialDetails);
    if (response.data.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
      setTimeout(function () {
        setStatus({});
      }, 2500);
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later",
      });
      setTimeout(function () {
        setStatus({});
      }, 2500);
    }
    setButtonText("Send");
  }

  return (
    <section className="contact" id="section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={onSubmitHandler}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      onChangeHandler("firstName", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) =>
                      onChangeHandler("lastName", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onChangeHandler("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onChangeHandler("phone", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    row={12}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onChangeHandler("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={`mt-4 ${
                        status.success ? "success" : "danger"
                      }`}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
