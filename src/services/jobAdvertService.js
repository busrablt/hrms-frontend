import axios from "axios"

export default class JobAdvertsService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdverts/getAll")
    }
}