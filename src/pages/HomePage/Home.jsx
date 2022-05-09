import React from "react";
import "./Home.scss";
import Header from "../../components/CustomHeader/Header";
import wave from "../../assests/image/wave.png";
import waveLight from "../../assests/image/wave_light.svg";
import { RANDOM_LONG_TEXT, RANDOM_SHORT_TEXT } from "../../utils/constants";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import ImagesCollection from "../../components/ImagesCollection/ImagesCollection";
import image1 from "../../assests/image/slider_image1.svg";
import image2 from "../../assests/image/slider_image2.svg";
import image3 from "../../assests/image/slider_image3.svg";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import CardCollection from "../../components/CardCollection/CardCollection";

const Home = () => {
  const imagesData = [image1, image2, image3];
  const textData = [
    "Needs Assesment",
    "Treatment Planning & Placement",
    "Transportation & Logistics",
    "Insuarance Advocacy",
    "Employment Advocacy",
    "Aftercare Planning",
  ];

  return (
    <div className="home-container">
      <section className="contact_title_section">
        <Header />
        <Container className="form_text_container">
          <div className="overlay_background" />
          <Row className="form_text_row">
            <Col lg={6} md={12} sm={12}>
              <div className="left_text">
                <p className="outline_big_text">GET AN</p>
                <p className="filled_big_text">INTERVENTION</p>
                <p className="normal_text">{RANDOM_SHORT_TEXT}</p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="contact_form_column_section">
              <ContactForm />
            </Col>
          </Row>
          <img alt="wave-design" src={waveLight} className="wave_absolute" />
          <img alt="wave-design" src={wave} className="wave_absolute" />
        </Container>
      </section>

      <section className="images_collection_section">
        <ImagesCollection imagesData={imagesData} />
      </section>

      <section className="custom_carousel_section">
        <CustomCarousel />
      </section>

      <section className="organize_text_section">
        <Container className="organize_text_container">
          <Row>
            <Col>
              <p className="organize_big_text">
                <span className="outline_big_text">WE </span>
                <span className="filled_big_test">CAN ORGANIZE EVERYTHING</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <p className="organize_medium_text">
                <span className="organize_bold_text">Lorem ipsum</span> dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <p className="organize_normal_text">{RANDOM_LONG_TEXT}</p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <p className="organize_normal_text">{RANDOM_LONG_TEXT}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="card_collection_section">
        <CardCollection cardsData={textData} />
      </section>

      <CustomFooter />
    </div>
  );
};

export default Home;
