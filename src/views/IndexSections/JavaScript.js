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

import {
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/robo2.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  // {
  //   src: require("assets/img/robo1.png").default,
  //   altText: "Slide 2",
  //   caption: "",
  // }
];

const carouselItems2 = [
  {
    src: require("assets/img/dm1.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  // {
  //   src: require("assets/img/dm2.jpg").default,
  //   altText: "Slide 2",
  //   caption: "",
  // }
];

export default function JavaScript() {

  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img
        alt="..."
        className="path"

        src={require("assets/img/path5.png").default}
      />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png").default}
      />


      <div className="section">
        <Container>
          <div className="title">
            <h3>DAY 2</h3>
            <h1><b>SESSIONS On</b></h1>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Current Trends in ROBOTICS
              </h1>
              <h3 className="pinki mt-4">
              BY : Dr.Riaz Uddin
              </h3>
              {/* <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                See all components
              </Button> */}
            </Col>
            <Col lg="6">

              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
          <br />
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                HOW TO EARN DOLLARS ONLINE AS A DIGITAL MARKETER
              </h1>
              <p className="pinki mt-4">
               BY : SHAHERYAR ARSHAD 
              </p>
              {/* <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                See all components
              </Button> */}
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems2}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
