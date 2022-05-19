import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Documents extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={4} md={8} sm={12}>
                            <img
                                src="https://image.shutterstock.com/image-photo/advertising-billboard-rural-scene-vacant-260nw-2058268805.jpg"/>
                            <Col>
                                <img
                                    src="https://image.shutterstock.com/image-photo/advertising-billboard-rural-scene-vacant-260nw-2058268805.jpg"/>
                            </Col>
                            <Col>
                                <img
                                    src="https://image.shutterstock.com/image-photo/advertising-billboard-rural-scene-vacant-260nw-2058268805.jpg"/>
                            </Col>


                        </Col>

                    </Row>


                </Container>
            </Fragment>
        );
    }
}

export default Documents;