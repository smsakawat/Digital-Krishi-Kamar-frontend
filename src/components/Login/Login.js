import React, {Fragment, useState} from 'react';
import '../../asset/css/test.css';
import {Button, Col, Container, Row} from "react-bootstrap";

import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const [error, setError] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const { loginWithEmail, setIsLoading} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/";
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
        console.log(data)
      setLoginError(false);
      setError(false);
  
      if (data.email === "" || data.password === "") {
        setError(true);
        return;
      }
      loginWithEmail(data.email, data.password)
      .then((result) => {
        alert("Login Successfull")
        setIsLoading(false);
        history.push(redirect_url);
      })
      .catch((err) => {
        setLoginError(true);
      })
      .finally(setIsLoading(false));
      
  
      reset();
    };
    return (
        <Fragment>
            <Container fluid={true} className="topFixedPage p-5">
                <div>
                    <Container className="loginBox">
                        <Row>

                            <Col lg={6} md={6} sm={12}>
                                <form  noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}>

                                    <h3 className="logIn">Login</h3>

                                    <div className="form-group">
                                        <label className="loginText">Email</label>
                                        <input  {...register("email")} type="email" className="form-control" placeholder="Enter email"
                                              />
                                    </div>

                                    <div className="form-group">
                                        <label className="loginText">Password</label>
                                        <input {...register("password")} type="password" className="form-control"
                                               placeholder="Enter password" />
                                    </div>

                                    <Button variant="success" type="submit" className='my-3'>Sign in</Button>
                                    {error && (
                <p style={{ color: "red", letterSpacing: "1px",marginTop:"5px" }}>
                  input fields cannot be empty
                </p>
              )}
               {loginError && (
                <p style={{ color: "red", letterSpacing: "1px",marginTop:"3px" }}>
                  Invalid Email or Password
                </p>
              )}
                                   <p style={{ letterSpacing: "1px", margin: "3px 0" ,color:"#fff"}}>
                Not have an account?
                <Link
                  to={{ pathname: "/register", query: { redirect_url } }}
                  style={{ color: "lightBlue", textDecoration: "none" }}
                >
                  Register!
                </Link>
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
