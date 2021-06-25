import axios from 'axios';

//const CANDIDATE_API_BASE_URL = "http://localhost:9091/dealer";
const CANDIDATE_API_BASE_URL = "http://localhost:8080/dealer";


class DealerService {

    signUp(dealer) {
        return axios.post(CANDIDATE_API_BASE_URL+'/addDealer', dealer);
    }
    dealerLogin(dealerlogin){
        return axios.post(CANDIDATE_API_BASE_URL+'/login', dealerlogin);
    }
    getAllDealers(){
        return axios.get(CANDIDATE_API_BASE_URL+'/getAllDealers');
    }
    
}

export default new DealerService();