import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import axios from "axios";
import PropTypes from "prop-types";
import * as React from "react";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../Ecom/Ecom.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function DigitalTechnologies() {
  const [value, setValue] = React.useState(0);
  const [technologies, setTechnologies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/digitalTechnologies/all").then((res) => {
      setTechnologies(res.data);
      console.log(res.data);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Vehicle" {...a11yProps(0)} />
        <Tab label="Loader" {...a11yProps(1)} />
        <Tab label="Medicine" {...a11yProps(2)} />
        <Tab label="Cultivator" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} className="tabPanel">
        {showLoader ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Row>
            <Col>
              <Row sm={12} md={6} lg={4} w={100} className="techItems">
                {technologies
                  .filter((tech) => tech.category === "vehicle")
                  .map(({ title, picture, price, des, _id }) => {
                    return (
                      <Card
                        className="Ecard"
                        // style={{ width: "15rem", height: "20rem" }}
                      >
                        <Link to={`/digitalTechnologies/${_id}`}>
                          <Card.Img
                            variant="top"
                            className="Eimages"
                            src={picture}
                          />
                          <Card.Body>
                            <Card.Title
                              style={{ color: "black", fontSize: "22px" }}
                            >
                              {title}
                            </Card.Title>
                            <Card.Text
                              style={{ color: "#666", lineHeight: 1.6 }}
                            >
                              {des}
                            </Card.Text>
                            <Card.Text
                              style={{ color: "#333", fontSize: "18px" }}
                            >
                              {price}
                            </Card.Text>
                          </Card.Body>
                        </Link>
                      </Card>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {showLoader ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Row>
            <Col>
              <Row sm={12} md={6} lg={4} w={100} className="techItems">
                {technologies
                  .filter((tech) => tech.category === "loader")
                  .map(({ title, picture, price, des, _id }) => {
                    return (
                      <Card
                        className="Ecard"
                        // style={{ width: "15rem", height: "20rem" }}
                      >
                        <Link to={`/digitalTechnologies/${_id}`}>
                          <Card.Img
                            variant="top"
                            className="Eimages"
                            src={picture}
                          />
                          <Card.Body>
                            <Card.Title
                              style={{ color: "black", fontSize: "22px" }}
                            >
                              {title}
                            </Card.Title>
                            <Card.Text
                              style={{ color: "#666", lineHeight: 1.6 }}
                            >
                              {des}
                            </Card.Text>
                            <Card.Text
                              style={{ color: "#333", fontSize: "18px" }}
                            >
                              {price}
                            </Card.Text>
                          </Card.Body>
                        </Link>
                      </Card>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {showLoader ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Row>
            <Col>
              {showLoader ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Row>
                  <Col>
                    <Row sm={12} md={6} lg={4} w={100} className="techItems">
                      {technologies
                        .filter((tech) => tech.category === "medicine")
                        .map(({ title, picture, price, des, _id }) => {
                          return (
                            <Card
                              className="Ecard"
                              // style={{ width: "15rem", height: "20rem" }}
                            >
                              <Link to={`/digitalTechnologies/${_id}`}>
                                <Card.Img
                                  variant="top"
                                  className="Eimages"
                                  src={picture}
                                />
                                <Card.Body>
                                  <Card.Title
                                    style={{ color: "black", fontSize: "22px" }}
                                  >
                                    {title}
                                  </Card.Title>
                                  <Card.Text
                                    style={{ color: "#666", lineHeight: 1.6 }}
                                  >
                                    {des}
                                  </Card.Text>
                                  <Card.Text
                                    style={{ color: "#333", fontSize: "18px" }}
                                  >
                                    {price}
                                  </Card.Text>
                                </Card.Body>
                              </Link>
                            </Card>
                          );
                        })}
                    </Row>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        )}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {showLoader ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Row>
            <Col>
              <Row sm={12} md={6} lg={4} w={100} className="techItems">
                {technologies
                  .filter((tech) => tech.category === "cultivator")
                  .map(({ title, picture, price, des, _id }) => {
                    return (
                      <Card
                        className="Ecard"
                        // style={{ width: "15rem", height: "20rem" }}
                      >
                        <Link to={`/digitalTechnologies/${_id}`}>
                          <Card.Img
                            variant="top"
                            className="Eimages"
                            src={picture}
                          />
                          <Card.Body>
                            <Card.Title
                              style={{ color: "black", fontSize: "22px" }}
                            >
                              {title}
                            </Card.Title>
                            <Card.Text
                              style={{ color: "#666", lineHeight: 1.6 }}
                            >
                              {des.slice(0, 130)}...
                            </Card.Text>
                            <Card.Text
                              style={{ color: "#333", fontSize: "18px" }}
                            >
                              {price}
                            </Card.Text>
                          </Card.Body>
                        </Link>
                      </Card>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        )}
      </TabPanel>
    </Box>
  );
}
