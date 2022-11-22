import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "../AuthProvider/AuthProvider";
import AddProduct from "../components/AddProduct/AddProduct";
import DigitalTechDetails from "../components/DigitalTechDetails/digitalTechDetails";
import KhoborDetails from "../components/KhoborDetails/KhoborDetails";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import CoursesPage from "../pages/CoursesPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import DocumentsPages from "../pages/DocumentsPages";
import EcomPage from "../pages/EcomPage";
import GooglePage from "../pages/GooglePage";
import HomePage from "../pages/HomePage";
import KrishiUddugtaPage from "../pages/KrishiUddugtaPage";
import LoginPage from "../pages/LoginPage";
import PortfolioPage from "../pages/PortfolioPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import RefundPage from "../pages/RefundPage";
import RegistrationPage from "../pages/RegistrationPage";
import ServicePage from "../pages/ServicePage";
import TermsPage from "../pages/TermsPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

class AppRoute extends Component {
  render() {
    return (
      <AuthProvider>
        <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/service" component={ServicePage} />
            <PrivateRoute path="/sale">
              <CoursesPage />
            </PrivateRoute>
            <PrivateRoute path="/rent">
              <PortfolioPage />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/refund" component={RefundPage} />
            <Route exact path="/terms" component={TermsPage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route
              exact
              path="/projectDetails"
              component={ProjectDetailsPage}
            />
            <Route exact path="/courseDetails" component={CourseDetailsPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/map" component={GooglePage} />
            <Route exact path="/documents" component={DocumentsPages} />
            <Route exact path="/dashboard/addProduct" component={AddProduct} />
            <Route exact path="/Ecom" component={EcomPage} />
            <Route
              path="/digitalTechnologies/:id"
              component={DigitalTechDetails}
            />
            <Route path="/recentNews/:id" component={KhoborDetails} />
            <Route exact path="/krishiuddugta" component={KrishiUddugtaPage} />
          </Switch>
        </Fragment>
      </AuthProvider>
    );
  }
}

export default AppRoute;
