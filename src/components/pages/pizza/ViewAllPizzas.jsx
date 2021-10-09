import React from "react";
import {Table} from "react-bootstrap";
import PizzaSerivice from "../../../services/PizzaService";
import data from "bootstrap/js/src/dom/data";


class ViewAllPizzas extends React.Component{
    constructor(props) {
        super(props);
        this.state =  this.initialState;

    }
    initialState ={
        pizzas:[]
    }

    componentDidMount = async () => {
        await PizzaSerivice.getAllPizzas()
            .then(response => response.data)
            .then((data) => {
                this.setState({pizzas: data});
            }).catch(error => {console.log("Cannot get all pizzas. Error: ", error)});
    }

    render() {
        return (
            <div>
                <div>
                    <h2>All Pizzas</h2>

                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Range</td>
                            <td>Description</td>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.pizzas.length === 0?
                                <tr>
                                    <td>{'Data Not Available!'}</td>
                                </tr>:
                                this.state.pizzas.map((e) => (
                                    <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.range}</td>
                                        <td>{e.description}</td>
                                    </tr>
                                ))
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

}

export default ViewAllPizzas;