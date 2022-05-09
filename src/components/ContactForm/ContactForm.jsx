import React, { useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import "./ContactForm.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import TextInput from "../../components/CustomTextInput/TextInput";
import submitIcon from "../../assests/icons/arrow-submit.svg";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const ContactForm = () => {
  const [countrieSelected, setCountrieSelected] = useState("Country");
  const [countries, setCountries] = useState([
    "India",
    "USA",
    "Germany",
    "France",
    "Singapore",
  ]);

  return (
    <div className="contact_form_container">
      <Row className="contact_form_row">
        <Col lg={12}>
          <p className="title_form_text">Contact Us</p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <TextInput labelValue="First Name" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <TextInput labelValue="Last Name" />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <TextInput labelValue="Business Email" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <TextInput labelValue="Company" />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <CustomDropdown
            placeholder={countrieSelected === "" ? "Country" : countrieSelected}
            selectedValue={countrieSelected}
            onSelect={(value) => {
              setCountrieSelected(value);
            }}
            dropDownItems={countries}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <CustomButton
            containerClass="submit_filled_button"
            buttonValue="Submit"
            leftIcon={submitIcon}
            size="lg"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
