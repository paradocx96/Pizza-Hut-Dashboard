import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import NavigationBar from "../layouts/Navigation/NavigationBar";
import FooterBar from "../layouts/Footer/FooterBar";

class Dashboard extends Component {

    divMinHeight = {
        minHeight: '600px'
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <Container>
                    <h1>DASHBOARD</h1>
                    <div style={this.divMinHeight}/>


                </Container>
                <FooterBar/>
            </div>
        );
    }
}

export default Dashboard;