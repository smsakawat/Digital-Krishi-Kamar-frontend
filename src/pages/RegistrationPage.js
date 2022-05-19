import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Riad from "../components/Riad/Riad";
import Footer from "../components/Footer/Footer";

class RegistrationPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pagetitle="Registration System"/>
                <Riad/>
                <Footer/>

            </Fragment>
        );
    }
}

export default RegistrationPage;