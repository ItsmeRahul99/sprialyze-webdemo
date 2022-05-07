import React from "react";
import "./Home.scss";
import Header from "../../components/CustomHeader/Header";
import backgroundImage1 from "../../assests/image/background1.jpg";
import { RANDOM_SHORT_TEXT } from "../../utils/constants";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import CustomFooter from "../../components/CustomFooter/CustomFooter";

const Home = () => {
  return (
    <div className="home-container">
      <section className="contact_title_section">
        <Header />
        <img
          src={backgroundImage1}
          alt="background"
          className="backgroundImage1"
        />
        <Container className="form_text_container">
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="left_text">
                <p className="outline_big_text">GET AN</p>
                <p className="filled_big_text">INTERVENTION</p>
                <p className="normal_text">{RANDOM_SHORT_TEXT}</p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      <CustomFooter />
    </div>
  );
};

export default Home;
