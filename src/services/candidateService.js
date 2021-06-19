import axios from "axios"

export   default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getCandidateDto")
    }
    
    getByCV(candidateId){
         return axios.get("http://localhost:8080/api/candidates/cv?candidateId=" +candidateId)
    }
   
}
