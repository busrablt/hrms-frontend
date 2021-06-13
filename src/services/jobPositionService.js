import axios from "axios"

export default class JobPositionsService{
    getJobPositions(){
        return axios.get("http://localhost:8080/api/jobPositions/getAll")
    }
}