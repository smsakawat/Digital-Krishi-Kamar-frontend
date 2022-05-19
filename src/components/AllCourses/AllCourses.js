import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center p-5">

                    <Row>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/vacant-land-that-has-sold-600w-13365145.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/advertising-billboard-immersed-rural-scene-600w-1105652150.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/land-plot-aerial-view-identify-600w-1968019828.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/land-plot-aerial-view-identify-600w-1968019828.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/advertising-billboard-immersed-rural-scene-600w-1105652150.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/advertising-billboard-immersed-rural-scene-600w-1105652150.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/land-plot-aerial-view-identify-600w-1968019828.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/vacant-land-that-has-sold-600w-13365145.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>


                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AllCourses;