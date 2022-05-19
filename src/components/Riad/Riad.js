import React, {Component, Fragment} from 'react';
import '../../asset/css/test.css';
import {Button, Col, Container, Row} from "react-bootstrap";

class Riad extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-5">
                    <div>
                        <Container className="regBox">
                            <Row>

                                <Col lg={6} md={6} sm={12}>
                                    <form>

                                        <h3 className="logIn">Create Account</h3>

                                        <div className="form-group">
                                            <label className="loginText">Name</label>
                                            <input type="email" className="form-control" placeholder="Enter name"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="loginText">Email</label>
                                            <input type="email" className="form-control" placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="loginText">Mobile No</label>
                                            <input type="email" className="form-control" placeholder="Enter mobile no"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="loginText">National ID</label>
                                            <input type="email" className="form-control" placeholder="Enter nid no"/>
                                        </div>

                                        <div className="form-group">
                                            <label className="loginText">Password</label>
                                            <input type="password" className="form-control"
                                                   placeholder="Enter password"/>
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="customCheck1"/>
                                                <label className="loginText2" htmlFor="customCheck1">Remember
                                                    me</label>
                                            </div>
                                        </div>

                                        <Button variant="success" type="submit">Sign Up</Button>
                                        <p className="loginText2">
                                            Forgot, <a className="loginText" href="#">password?</a>
                                        </p>
                                    </form>
                                </Col>


                            </Row>
                        </Container>
                    </div>


                </Container>


            </Fragment>
        );
    }
}

export default Riad;