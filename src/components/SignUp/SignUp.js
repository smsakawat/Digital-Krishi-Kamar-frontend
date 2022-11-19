import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { user, setUser, registerUser, setIsLoading, saveUser } = useAuth();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  //   show user
  useEffect(() => {
    // console.log(user);
    // console.log(user.email, user.displayName, user.mobile, user.nidNo);
  }, [user]);

  const onSubmit = (data) => {
    //   console.log(data)
    setError(false);
    setPassError(false);
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.mobile === "" ||
      data.nidNo === "" ||
      data.remember === ""
    ) {
      setError(true);
      return;
    }
    // register user with email and password
    registerUser(data.email, data.password)
      .then((result) => {
        // console.log(data);
        // console.log(data.displayName);
        saveUser(data.email, data.name, data.mobile, data.nidNo);
        setUser({
          ...user,
          email: data.email,
          displayName: data.name,
          mobile: data.mobile,
          nidNo: data.nidNo,
          imgUrl:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        });
        alert("Registration successfull");
        history.push("/dashboard");

        // saveUser(data.name,data.email,data.mobile,data.nidNo)
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
      })
      .finally(setIsLoading(false));

    reset();
  };

  return (
    <>
      <Container fluid={true} className="topFixedPage p-5">
        <div>
          <Container className="regBox">
            <Row>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h3 className="signUPHeader">SIGN UP</h3>

                <div className="form-group">
                  <label className="loginText">Name</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("name")}
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="loginText">Email</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("email")}
                    email
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="loginText">Mobile No</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("mobile")}
                    type="text"
                    className="form-control"
                    placeholder="Enter mobile no"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="loginText">National ID</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("nidNo")}
                    type="text"
                    className="form-control"
                    placeholder="Enter nid no"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="loginText">Password</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("password")}
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      {...register("remember")}
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="loginText2" htmlFor="customCheck1">
                      Remember me
                    </label>
                  </div>
                </div>

                <Button variant="success" type="submit">
                  Sign Up
                </Button>
                {error && (
                  <p
                    style={{
                      color: "red",
                      letterSpacing: "1px",
                      marginTop: "5px",
                    }}
                  >
                    input fields cannot be empty
                  </p>
                )}
                <br />
                <p className="loginText2">
                  Forgot,{" "}
                  <a className="loginText" href="#">
                    password?
                  </a>
                </p>
              </form>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
