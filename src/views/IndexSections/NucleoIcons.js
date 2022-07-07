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
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path3.png").default}
      />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">PROJECT EXHIBITION</h2>
            <h4 className="description">
              This exhibition mainly focuses on the engineering ingenuity skills, portrayed by the
              students in a variety of engineering projects, they developed during their academics. The
              exhibition would provide a platform for showcasing all these creative projects so that they
              could be appreciated by all in true sense. Projects from known universities of Pakistan will
              be exhibited and the candidates will be given a chance to present their detailed and
              innovative idea in front of the judging panel. After qualifying the assessing criteria of the
              judging panel the best project will be declared the winner.
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="primary"
                href="https://forms.gle/tbazS7dx5zvn71wz8"
                rel="noopener noreferrer"
                target="_blank"
              >
                Register here
              </Button>
              <Button
                className="btn-simple btn-round"
                color="primary"
                href="#"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                Rule book
              </Button>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
