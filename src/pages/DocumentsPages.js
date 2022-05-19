import React, {Component, Fragment} from 'react';
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Documents from "../components/Documents/Documents";

class DocumentsPages extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pagetitle="Papers Documents"/>
                <Documents/>

                <Footer/>


            </Fragment>
        );
    }
}

export default DocumentsPages;