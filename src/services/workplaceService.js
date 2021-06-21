import axios from "axios"

export default class WorkplaceService{
    getWorkPlaces(){
        return axios.get("http://localhost:8080/api/workplaces/getAll")
    }
}