import React, { Component, Fragment } from "react";
import Ecom from "../components/Ecom/Ecom";
import Header from "../components/Header/Header";
import PageTop from "../components/PageTop/PageTop";

class EcomPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <PageTop pagetitle="Digital Technologies" />
        <Ecom />
      </Fragment>
    );
  }
}

export default EcomPage;
