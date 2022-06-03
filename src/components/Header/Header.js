import React, {Component, Fragment} from 'react';
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoscroll.svg'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css';
import {NavLink} from "react-router-dom"
import {Container, Nav, Navbar,} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button } from 'bootstrap';
import { useState } from 'react';


// navBarTitle: "navTitle",
// navBarLogo: [whiteLogo],
// navVariant: "dark",
// navBarBack: "navBackground",
// navBarItem: "navItem",
// pageTitle: props.title,
const Header = (props) => {

   
    const history = useHistory();
    const { user, logOut } = useAuth();
const [navBarTitle,setNavBarTitle]= useState("navTitleScroll ");
const [navBarLogo,setNavBarLogo]= useState([blueLogo]);
const [navVariant,setNavVariant]= useState("light");
const [navBarBack,setNavBarBack]= useState("navBackgroundScroll");
const [navBarItem,setnavBarItem]= useState("navItemScroll");
const [pageTtile,setPageTitle]= useState(props.title);


// const onScrollNavbar = () => {
//     if (window.scrollY>100) {
//         setNavVariant("light");
//         setNavBarTitle("navTitleScroll")
//         setNavBarLogo([blueLogo])
//         setNavBarBack("navBackgroundScroll"); 
//         setnavBarItem("navItemScroll");    
          
//     } 
//     else if(window.scrollY <100){
//         setNavVariant("dark");
//         setNavBarTitle("navTitle")
//         setNavBarLogo([whiteLogo])
//         setNavBarBack("navBackground"); 
//         setnavBarItem("navItem");   
//     }
//   };

//   handlelogout
const handleLogout=()=>{
if(user?.email){
    logOut();
}

}
  // change navbar on scroll

    return (
        <Fragment>
            <title>{pageTtile}</title>
            <Navbar variant={navVariant} className={navBarBack} collapseOnSelect
                    expand="lg">
                <Container>
                    <Navbar.Brand><NavLink className={navBarTitle} to="/"><img
                        src={navBarLogo}/> R@ Real Estate
                        Company</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color: '#0a8ee'}}
                                               className={navBarItem}
                                               to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#0a8ee'}}
                                               className={navBarItem}
                                               to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                className={navBarItem}
                                                to="/sale">SALE</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                className={navBarItem}
                                                to="/rent">RENT</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                className={navBarItem}
                                                to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                                                className={navBarItem}
                                                to="/about">ABOUT</NavLink></Nav.Link>
                        
                           {!user?.email&&
    <>
     <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                         className={navBarItem}
                         to="/login">LOGIN</NavLink></Nav.Link>
     <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                         className={navBarItem}
                         to="/registration">REGISTRATION</NavLink></Nav.Link>
    </>
    }
                        {
                            user?.email&&
                           <>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#0a8ee'}}
                         className={navBarItem}
                         to="/dashboard">DASHBOARD</NavLink></Nav.Link>
                    <button class=" btn btn-primary" onClick={()=>handleLogout()}>Logout</button>
                           </>
                        }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
};

export default Header;

