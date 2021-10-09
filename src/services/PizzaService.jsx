import axios from "axios";
import connection from "./connecction.json";

const SERVICE_URL = "/api/pizza/";
const URL = connection.remoteAddress + SERVICE_URL;

export default new class PizzaService{

    getAllPizzas(){
        return axios.get(URL + "getAllPizzas");
    }

    addPizza(pizza){
        return axios.post(URL + "addPiza", pizza);
    }
}