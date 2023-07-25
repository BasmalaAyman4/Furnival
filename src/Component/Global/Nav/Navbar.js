import React, { useRef, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Navbar.module.css'
import x from "../../../assets/icons/x.svg"
import logo from "../../../assets/image/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
import { Link, NavLink, useLocation } from 'react-router-dom';
export default function NavBar() {
    const location = useLocation()

    const toggleNav = useRef();
    const [NavbarSide, setNavbarSide] = useState(false)
    const [navBg, setNavBg] = useState(false);
    const changeNavBg = () => {
        window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])

    return (
        <>
            {['sm'].map((expand) => (
                <div onScroll={changeNavBg} >
                    <Navbar key={expand} expand={expand} className={navBg ? "navBackground" : "nav"}>
                        <Container >
                            <div className="nav-dropdown">
                                <button type="button" className="Nav-button" onClick={() => { setNavbarSide(true) }} variant="success" id="basic-navbar-nav">
                                    <span className="icon-bar"></span>
                                </button>

                                <div ref={toggleNav} className={NavbarSide ? "navbar-toggle show-nav" : "navbar-toggle"} >
                                    <div className="nav-side">
                                        <div className="side__close " >
                                            <button onClick={() => { setNavbarSide(false) }} className="btn side__close-button  ">
                                                <img src={x} alt="" className="side__close__svg" />
                                            </button>
                                        </div>
                                        <ul className="nav-side__list pt-3">
                                            <li>
                                                <NavLink to="/" className="nav-link" >Home </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/shop" className="nav-link">Shop</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/blog" className="nav-link" >Blog </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/about" className="nav-link">About</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/contact" className="nav-link" >Contact </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="other-side" onClick={() => { setNavbarSide(false) }}>
                                    </div>
                                </div>
                            </div>
                            <Navbar.Brand to="/" className={`${styles.navbrand}`}>
                                <img src={logo} alt='' className={styles.logo} />
                                <h4 className={`${styles.logoTitle}`}>

                                    Furnival
                                </h4>
                            </Navbar.Brand>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="start"
                            >
                                <Offcanvas.Body>
                                    <Nav className={`justify-content-center flex-grow-1 p-2 ${styles.nav__dir} `} >
                                        <NavLink to="/" className={`${styles["main-nav__link"]} main-nav__link c`}>Home</NavLink>
                                        <NavLink to="/shop" className={`${styles["main-nav__link"]} main-nav__link`}>Shop</NavLink>
                                        <NavLink to="/blog" className={`${styles["main-nav__link"]} main-nav__link`}>Blog</NavLink>
                                        <NavLink to="/about" className={`${styles["main-nav__link"]} main-nav__link`}>About</NavLink>
                                        <NavLink to="/contact" className={`${styles["main-nav__link"]} main-nav__link`}>Contact</NavLink>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas >
                            <Button to="/login" className={`${styles.loginBtn}`}>Login</Button>

                        </Container >
                    </Navbar >
                </div>
            ))
            }

        </>
    )
}
