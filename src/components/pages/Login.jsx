import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>LOGIN</h1>
                    <Link to={'/dashboard'}>DASHBOARD</Link>
                </Container>
            </div>
        );
    }
}

export default Login;