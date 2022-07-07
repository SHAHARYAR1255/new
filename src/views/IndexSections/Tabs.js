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
import Competition from "./Competition";
import {

  Container,

} from "reactstrap";
import {data} from '../../variables/data';

export default function Tabs() {

  return (
    <div className="section section-tabs" id="download-section">
      {console.log(data)}
      <Container>
        <div className="title">
          <h1 className="mb-3"><b>COMPETETIONS</b></h1>
        </div>
        {data.map(dat => {
          return <Competition datas={dat}
          />
        })}

      
      </Container>
    </div>
  );
}
