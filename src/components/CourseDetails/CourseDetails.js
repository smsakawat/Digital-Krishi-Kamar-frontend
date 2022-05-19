import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h3 className="courseFullTitle">
                                        Full Dynamic Website with Admin Panel
                                    </h3>
                                    <h5 className="courseSubTitle">Total Student= 30</h5>
                                    <h5 className="courseSubTitle mt-0">Total Courses= 30</h5>

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="courseDescription">At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                        officia deserunt mollitia praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias
                                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                                        qui </p>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName"> Skill You Get</h1>
                            <ul>

                                <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                <br/>

                                <Button variant="primary">BUY NOw</Button>

                            </ul>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source
                                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                                <BigPlayButton position="center"/>
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;