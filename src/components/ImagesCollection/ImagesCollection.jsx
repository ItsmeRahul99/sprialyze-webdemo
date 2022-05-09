import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./ImagesCollection.scss";

const ImagesCollection = ({ imagesData }) => {
  return (
    <Container className="images_collection_container">
      <Row>
        {imagesData.map((data) => {
          return (
            <Col lg={4} md={4}>
              <Image
                src={data}
                fluid
                alt="images"
                className="single_image_style"
              />
              {/* <img src={data} alt="images" className="single_image_style" /> */}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ImagesCollection;
