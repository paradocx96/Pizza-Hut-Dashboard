import React, {Component} from 'react';
import {Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import pizzaLogo from './../../assets/images/pizzaLogo.png';

class Login extends Component {

    conBox = {
        padding: '200px'
    }

    divLoginBox = {
        width: '300px',
        height: '300px',
        margin: 'auto',
        padding: '50px'
    }

    render() {
        return (
            <div>
                <Container style={this.conBox}>
                    <div style={this.divLoginBox}>
                        <img src={pizzaLogo} alt={'PizzaHut'} className={'pb-5'}/>
                        <Form>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Control placeholder="Username"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <div style={{marginLeft: '65px',marginRight: '65px'}}>
                                <Link to={'/dashboard'} className="btn btn-primary">Login</Link>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Login;