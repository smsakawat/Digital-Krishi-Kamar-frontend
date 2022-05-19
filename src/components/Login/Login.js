import React, {Fragment, useState} from 'react';
import '../../asset/css/test.css';
import {Button, Col, Container, Row} from "react-bootstrap";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = (e) => {

        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const hanldeOnSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);

    };
    return (
        <Fragment>
            <Container fluid={true} className="topFixedPage p-5">
                <div>
                    <Container className="loginBox">
                        <Row>

                            <Col lg={6} md={6} sm={12}>
                                <form onSubmit={hanldeOnSubmit}>

                                    <h3 className="logIn">Login</h3>

                                    <div className="form-group">
                                        <label className="loginText">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter email"
                                               onChange={handleOnChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="loginText">Password</label>
                                        <input type="password" className="form-control"
                                               placeholder="Enter password" onChange={handleOnChange}/>
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="customCheck1"/>
                                            <label className="loginText2" htmlFor="customCheck1">Remember
                                                me</label>
                                        </div>
                                    </div>

                                    <Button variant="success" type="submit">Sign in</Button>
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
    )

}
export default Login;
