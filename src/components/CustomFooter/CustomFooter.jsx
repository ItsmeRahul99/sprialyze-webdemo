import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CustomFooter.scss";

const CustomFooter = () => {
  return (
    <footer className="footer_main_container">
      <Container className="footer_container">
        <Row>
          <Col lg={6} md={12} sm={12}>
            <p className="footer_text">
              @2022 Get an Intervention Inc. All rights reserved.
            </p>
          </Col>
          <Col lg={6} md={12} sm={12} className="footer_link_column">
            <a href={() => false} className="footer_link">
              Privacy Policy
            </a>
            <span className="short_line" />
            <a href={() => false} className="footer_link">
              Terms of use
            </a>
            <span className="short_line" />
            <a href={() => false} className="footer_link">
              Site Map
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
