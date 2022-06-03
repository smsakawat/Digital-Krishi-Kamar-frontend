import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="Service"/>
                <PageTop pagetitle="My Services"/>
                <Services/>
                <ContactSection/>
                <Footer/>


            </Fragment>
        );
    }
}

export default ServicePage;
