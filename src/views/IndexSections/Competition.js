import React from 'react';

import classnames from "classnames";
// reactstrap components
import {
    TabContent,
    TabPane,
    Button,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

function Competition({ datas }) {
    const { name1, name2, venue1, time1, form1, rulebook1, venue2, time2, form2, rulebook2, text1, text2} = datas ;
    console.log(datas, "sds")
    const [iconTabs, setIconsTabs] = React.useState(1);
    const [textTabs, setTextTabs] = React.useState(4);
    return (

        <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
                <div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                        Date:21-July-2020 , Time: {time1} , Venue:{venue1}
                    </small>
                </div>
                <Card>
                    <CardHeader>
                        <Nav className="nav-tabs-info" role="tablist" tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: iconTabs === 1,
                                    })}
                                    onClick={(e) => setIconsTabs(1)}

                                >
                                    <i className="tim-icons icon-spaceship" />
                                    <b>{name1}</b>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                            <TabPane tabId="link1">
                                <p>
                                   {text1}
                                </p>
                            </TabPane>
                        </TabContent>
                        <div className="btn-wrapper">
                            <Button
                                className="btn-round"
                                color="primary"
                                href={form1}
                                rel="noopener noreferrer"

                            >
                                Register here
                            </Button>
                            <Button
                                className="btn-simple btn-round"
                                color="primary"
                                href={rulebook1}
                                rel="noopener noreferrer"
                                size="lg"
                                target="_blank"
                            >
                                Rule book
                            </Button>
                        </div>
                    </CardBody>

                </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
                <div className="mb-3">
                    <small className="text-uppercase font-weight-bold">
                    Date:21-July-2020 , Time: {time2} , Venue:{venue2}
                    </small>
                </div>
                <Card>
                    <CardHeader>
                        <Nav className="nav-tabs-info" role="tablist" tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: textTabs === 4,
                                    })}
                                    onClick={(e) => setTextTabs(4)}
                                    href="#pablo"
                                >
                                    <i className="tim-icons icon-spaceship" />
                                    {name2}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent className="tab-space" activeTab={"link" + textTabs}>
                            <TabPane tabId="link4">
                                <p>
                                   {text2}
                                </p>

                            </TabPane>

                        </TabContent>
                        <div className="btn-wrapper">
                            <Button
                                className="btn-round"
                                color="primary"
                                href={form2}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Register here
                            </Button>
                            <Button
                                className="btn-simple btn-round"
                                color="primary"
                                href={rulebook2}
                                rel="noopener noreferrer"
                                size="lg"
                                target="_blank"
                            >
                                Rule book
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Competition
