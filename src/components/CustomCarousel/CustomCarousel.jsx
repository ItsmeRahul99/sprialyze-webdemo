import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import image1 from "../../assests/image/slider_image1.svg";
import image2 from "../../assests/image/slider_image2.svg";
import image3 from "../../assests/image/slider_image3.svg";

const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="carousel_container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="carousal_image">
            <img className="d-block w-40" src={image1} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-40" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CustomCarousel;
