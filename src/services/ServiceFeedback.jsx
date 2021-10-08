import axios from "axios";
import connection from "./connecction.json";

const SERVICE_URL = "/api/feedback";
const URL = connection.remoteAddress + SERVICE_URL;

export default new class ServiceFeedback {

    create(value) {
        return axios.post(URL + "/add", value);
    }

    getAll() {
        return axios.get(URL + "/get");
    }

    getById(id) {
        return axios.get(URL + "/getById/" + id);
    }
}