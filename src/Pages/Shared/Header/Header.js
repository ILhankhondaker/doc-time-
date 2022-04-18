import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar className='menu' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src='https://www.doctime.com.bd/images/logo/doctime_title_logo_tm.svg' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>

                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/service">My Services</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/bloog'>Blog</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} as={Link} to="about">About</NavLink>


                        </Nav>
                        <Nav>

                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log out</button>
                                    :
                                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} as={Link} to="login">
                                        Login
                                    </NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;