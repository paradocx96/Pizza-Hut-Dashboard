import axios from "axios";
import connection from "./connecction.json";

const URL = connection.remoteAddress + SERVICE_URL;

export default new class PizzaService{

    getAllPizzas(){
        return axios.get(URL + "getAllPizzas");
    }

    addPizza(pizza){
        return axios.post(URL + "addPizza", pizza);
    }
}