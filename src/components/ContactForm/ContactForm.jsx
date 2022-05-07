import React, { useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import "./ContactForm.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import TextInput from "../../components/CustomTextInput/TextInput";
import submitIcon from "../../assests/icons/arrow-submit.svg";

const ContactForm = () => {
  const [countries, setCountries] = useState([
    "India",
    "USA",
    "Germany",
    "France",
    "Singapore",
  ]);
  return (
    <div className="contact_form_container">
      <Row>
        <Col lg={12}>
          <p className="title_form_text">Contact Us</p>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <TextInput labelValue="First Name" />
        </Col>
        <Col lg={6}>
          <TextInput labelValue="Last Name" />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <TextInput labelValue="Business Email" />
        </Col>
        <Col lg={6}>
          <TextInput labelValue="Company" />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Country
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {countries.map((data) => {
                return <Dropdown.Item href="#">{data}</Dropdown.Item>;
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <CustomButton buttonValue="Submit" leftIcon={submitIcon} />
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
