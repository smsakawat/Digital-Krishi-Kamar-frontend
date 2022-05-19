import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import riadlogo1 from '../../asset/image/land.svg'


class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={riadlogo1}/>
                                <h1 className="serviceName">BUYING LAND</h1>
                                <p className="serviceDescription">Provide a Handsome Price
                                </p>
                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={riadlogo1}/>
                                <h1 className="serviceName">SELLING LAND</h1>
                                <p className="serviceDescription">Land Available in Amazing Spot
                                </p>

                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={riadlogo1}/>
                                <h1 className="serviceName">RENT FOR LAND</h1>
                                <p className="serviceDescription">Rent for Super Shop,Market,Picnic spot
                                </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
            ;
    }
}

export default Services;