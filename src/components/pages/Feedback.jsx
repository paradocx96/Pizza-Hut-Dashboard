import React, {Component} from 'react';
import ServiceFeedback from "../../services/ServiceFeedback";
import {Container, Table} from "react-bootstrap";
import NavigationBar from "../layouts/Navigation/NavigationBar";
import FooterBar from "../layouts/Footer/FooterBar";

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        feedbackList: [],
    }

    componentDidMount = async () => {
        await ServiceFeedback.getAll()
            .then(response => response.data)
            .then((data) => {
                this.setState({feedbackList: data});
            }).catch(error =>
                console.log(error.message)
            );
    }

    divMinHeight = {
        minHeight: '200px'
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <Container>
                    <h1>Customer Feedback</h1>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Message Type</th>
                            <th>Message</th>
                            <th>Date & Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.feedbackList.length === 0 ?
                                <tr>
                                    <td>{'Data Not Available!'}</td>
                                </tr>
                                :
                                this.state.feedbackList.map((item) => (
                                    <tr key={item.id}>
                                        <td>#</td>
                                        <td>{item.user}</td>
                                        <td>{item.message_type}</td>
                                        <td>{item.description}</td>
                                        <td>{item.datetime}</td>
                                    </tr>
                                ))
                        }
                        </tbody>
                    </Table>
                </Container>
                <div style={this.divMinHeight}/>
                <FooterBar/>
            </div>
        );
    }
}

export default Feedback;
