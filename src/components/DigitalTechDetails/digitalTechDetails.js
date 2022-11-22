import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import PageTop from "../PageTop/PageTop";
import "./digitalTechDetails.css";

const DigitalTechDetails = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { title, des, _id, category, picture } = item || {};
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    axios.get(`http://localhost:5000/digitalTechnologies/${id}`).then((res) => {
      setItem(res.data);
      setShowLoader(false);
      console.log(res.data);
    });
  }, [id]);
  return (
    <>
      <Header />
      <PageTop pagetitle="Details Products" />
      <Container className="EDetais">
        <Link to="/Ecom">
          <Button variant="danger" style={{ margin: "4px" }}>
            Back
          </Button>
        </Link>
        <Row>
          <Col sm={12} md={7}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" className="Edetaisimages" src={picture} />
            </Card>
          </Col>
          <Col sm={6} md={4}>
            <Card style={{ padding: "1rem" }}>
              <Card.Body>
                <Card.Title
                  style={{
                    color: "black",
                    fontSize: "25px",
                    textAlign: "center",
                    marginBottom: "5rem",
                  }}
                >
                  {title}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "black",
                    marginLeft: "20px",
                    textTransfrom: "uppercase",
                  }}
                >
                  {category}
                </Card.Text>
                <Card.Text
                  style={{
                    color: "gray",
                    marginLeft: "20px",
                    fontSize: "40px",
                  }}
                >
                  {title}
                </Card.Text>
                <Card.Text
                  style={{
                    color: "gray",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                >
                  {des}
                </Card.Text>
                <Button variant="success" style={{ marginRight: "20px" }}>
                  Buy Now
                </Button>
                <Button variant="success">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DigitalTechDetails;
