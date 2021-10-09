import React, {Component} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzaLogo from './../../../assets/images/pizzaLogo.png';

class NavigationBar extends Component {

    backColor = {
        backgroundColor: '#283593',
        color: 'white'
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" style={this.backColor} variant="dark">
                    <Container>
                        <Link to={'/dashboard'} className={'navbar-brand'}>
                            <img
                                src={pizzaLogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to={'/feedback'} className={'nav-link'}>Feedback</Link>
                                <Link to={'/user'} className={'nav-link'}>Users</Link>
                                <Link to={'/order'} className={'nav-link'}>Oder</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;