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
export default function NavBar() {
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
                                                <Nav.Link href="/" className="nav-link" >Home </Nav.Link>
                                            </li>
                                            <li>
                                                <Nav.Link href="/shop" className="nav-link">Shop</Nav.Link>
                                            </li>
                                            <li>
                                                <Nav.Link href="/blog" className="nav-link" >Blog </Nav.Link>
                                            </li>
                                            <li>
                                                <Nav.Link href="/about" className="nav-link">About</Nav.Link>
                                            </li>
                                            <li>
                                                <Nav.Link href="/contact" className="nav-link" >Contact </Nav.Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="other-side" onClick={() => { setNavbarSide(false) }}>
                                    </div>
                                </div>
                            </div>
                            <Navbar.Brand to="/" className={`${styles.navbrand}`}>
                                <h4 className={`${styles.logoTitle}`}>
                                    <img src={logo} alt='' className={styles.logo} />
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
                                        <Nav.Link href="/" className={`${styles["main-nav__link"]} main-nav__link c`}>Home</Nav.Link>
                                        <Nav.Link href="/shop" className={`${styles["main-nav__link"]} main-nav__link`}>Shop</Nav.Link>
                                        <Nav.Link href="/blog" className={`${styles["main-nav__link"]} main-nav__link`}>Blog</Nav.Link>
                                        <Nav.Link href="/about" className={`${styles["main-nav__link"]} main-nav__link`}>About</Nav.Link>
                                        <Nav.Link href="/contact" className={`${styles["main-nav__link"]} main-nav__link`}>Contact</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas >
                            <Nav.Link href="/login" className={`${styles.l}`}><Button className={`${styles.loginBtn}`}>Login</Button></Nav.Link>

                        </Container >
                    </Navbar >
                </div>
            ))
            }

        </>
    )
}
