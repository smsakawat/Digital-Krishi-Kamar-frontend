import React, {Component, Fragment} from 'react';
import Login from "../components/Login/Login";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

class LoginPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pagetitle="Login System"/>
                <Login/>
                <Footer/>


            </Fragment>
        );
    }
}

export default LoginPage;