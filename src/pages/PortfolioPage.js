import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllProjects from "../components/AllProjects/AllProjects";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <PageTop pagetitle="FOR RENT"/>
                <AllProjects/>
                <Footer/>

            </Fragment>
        );
    }
}

export default PortfolioPage;