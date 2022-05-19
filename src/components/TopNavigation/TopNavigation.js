import React, {Component, Fragment} from 'react';
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoscroll.svg'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css';
import {NavLink} from "react-router-dom"
import {Container, Nav, Navbar,} from "react-bootstrap";

class TopNavigation extends Component {


    constructor(props) {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo],
            navVariant: "dark",
            navBarBack: "navBackground",
            navBarITem: "navItem",
            pageTitle: props.title


        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navVariant: 'light',
                navBarTitle: 'navTitleScroll',
                navBarLogo: [blueLogo],
                navBarBack: 'navBackgroundScroll',
                navBarITem: 'navItemScroll'
            })
        } else if (window.scrollY < 100) {
            this.setState({
                navVariant: 'dark',
                navBarTitle: 'navTitle',
                navBarLogo: [whiteLogo],
                navBarBack: 'navBackground',
                navBarITem: 'navItem'
            })
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed={"top"} collapseOnSelect
                        expand="lg">
                    <Container>
                        <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img
                            src={this.state.navBarLogo}/> R@ Real Estate
                            Company</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink exact activeStyle={{color: '#0a8ee'}}
                                                   className={this.state.navBarITem}
                                                   to="/">HOME</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color: '#0a8ee'}}
                                                   className={this.state.navBarITem}
                                                   to="/service">SERVICES</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                    className={this.state.navBarITem}
                                                    to="/sale">SALE</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                    className={this.state.navBarITem}
                                                    to="/rent">RENT</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                    className={this.state.navBarITem}
                                                    to="/contact">CONTACT</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                    className={this.state.navBarITem}
                                                    to="/about">ABOUT</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                    className={this.state.navBarITem}
                                                    to="/login">LOGIN</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                    className={this.state.navBarITem}
                                                    to="/registration">REGISTRATION</NavLink></Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        )
            ;
    }
}

export default TopNavigation;