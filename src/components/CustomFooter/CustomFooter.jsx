import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CustomFooter.scss";

const CustomFooter = () => {
  return (
    <div className="footer_main_container">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            @2022 Get an Intervention Inc. All rights reserved.
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <a href={() => false}> Privacy Policy</a>
              <hr />
              <a href={() => false}>Terms of use</a>
              <hr />
              <a href={() => false}>Site Map</a>
              <hr />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomFooter;
