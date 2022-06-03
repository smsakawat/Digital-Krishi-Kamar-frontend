import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';

class CoursesPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Header title="course"/>
                <PageTop pagetitle="FOR SALE"/>
                <AllCourses/>
                <Footer/>

            </Fragment>
        );
    }
}

export default CoursesPage;