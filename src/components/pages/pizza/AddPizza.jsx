import React from "react";
import PizzaService from "../../../services/PizzaService";
import data from "bootstrap/js/src/dom/data";
import {Button, Form} from "react-bootstrap";

class AddPizza extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onChange = this.onChange.bind(this);
        this.submitPizza = this.submitPizza.bind(this);

    }

    initialState={
        name:'',
        range:'',
        description:'',
        flag:'',
    }

    submitPizza = async (event) => {

        event.preventDefault();

        let pizza={
            name:this.state.name,
            range: this.state.range,
            description:this.state.description,
            flag:this.state.flag
        }

        await PizzaService.addPizza(pizza)
            .then(response => response.data)
            .then((data) => {
                if(data != null){
                    alert("Pizza successfully added.")
                }
            }).catch(error => {
                console.log("Cannot add pizza. Error : ", error);
            })
    }

    onChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    render() {
        const {name, range, flag, description} = this.state;
        return (
            <div>
                <div className={'container-fluid'}>
                    <h2>Add Pizza</h2>

                    <Form onSubmit={this.submitPizza}>

                        <Form.Group>
                            <Form.Label>Pizza name</Form.Label>
                            <Form.Control
                                required
                                type={'text'}
                                name={'name'}
                                placeholder={'Enter name'}
                                value={name}
                                onChange={this.onChange}

                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Range of pizza</Form.Label>
                            <Form.Control
                                required
                                type={'text'}
                                name={'range'}
                                placeholder={'Enter range'}
                                value={range}
                                onChange={this.onChange}

                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description of pizza</Form.Label>
                            <Form.Control
                                required
                                type={'text'}
                                name={'description'}
                                placeholder={'Enter description'}
                                value={description}
                                onChange={this.onChange}

                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Image path of pizza</Form.Label>
                            <Form.Control
                                required
                                type={'text'}
                                name={'flag'}
                                placeholder={'Enter image path'}
                                value={flag}
                                onChange={this.onChange}

                            />
                        </Form.Group>

                        <Button type={'submit'} className={'btn btn-success'}>Submit Pizza</Button>

                    </Form>
                </div>

            </div>
        );
    }

}

export default AddPizza;