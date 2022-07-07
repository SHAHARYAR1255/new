/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      
    >
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              WITNESS, HOW IT HAPPENS!
            </h2>
            <h4 className="description">
              Come Join Us at Main Auditorium at 9:00 AM on 21st and 22nd of July.
              {/* So do participate and enhance your skills and win exciting cash prizes.  */}
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            {/* <Button
              className="btn-round"
              color="info"
              role="button"
              size="lg"
            >
              Download React
            </Button> */}
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-info font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
            <h4 className="mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="twitter"
              id="twitter"
              size="lg"
            >
              <i className="fab fa-instagram" />
            </Button>
            <UncontrolledTooltip delay={0} target="twitter">
              Follow
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="facebook"
              id="facebook"
              size="lg"
            >
              <i className="fab fa-facebook-square" />
            </Button>
            <UncontrolledTooltip delay={0} target="facebook">
              Like
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="github"
              href="https://sentec.live"
              id="tooltip877922017"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-envelope-o " />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              Website
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
