import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";
import Header from '../components/Header/Header';

class ContactPage extends Component {

    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="Contact"/>
                <PageTop pagetitle="Contact"/>
                <ContactSection/>

                <Footer/>


            </Fragment>
        );
    }
}

export default ContactPage;