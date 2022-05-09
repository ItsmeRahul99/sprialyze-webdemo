import React from "react";
import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { RANDOM_VERY_SHORT_TEXT } from "../../utils/constants";
import "./CardCollection.scss";

const CardCollection = ({ cardsData }) => {
  return (
    <Container className="cardcollection_container">
      <Row>
        {cardsData.map((value) => {
          return (
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id={`tooltip-bottom custom_tooltip_design`}>
                  {RANDOM_VERY_SHORT_TEXT}
                </Tooltip>
              }
            >
              <Col lg={4} md={6} sm={12}>
                <div className="card_outer">
                  <p className="center_card_text">{value}</p>
                  <span className="rounded_I">i</span>
                </div>
              </Col>
            </OverlayTrigger>
          );
        })}
      </Row>

      {/* <Button variant="secondary">Tooltip on</Button>
      </OverlayTrigger> */}
    </Container>
  );
};

export default CardCollection;
