import axios from "axios"

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdverts/getAll")
    }

    addJobAdvert(values){
        return axios.post("http://localhost:8080//api/jobadverts/add",values)
    }
}