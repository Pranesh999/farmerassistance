import axios from 'axios';

//const FARMER_API_BASE_URL = "http://localhost:9093/farmer";
const FARMER_API_BASE_URL = "http://localhost:8080/farmer";



class FarmerService{
    /*signUp(farmer) {
    return axios.post(FARMER_API_BASE_URL+'/signup', farmer);
    }*/

    farmerLogin(farmer){
        return axios.post(FARMER_API_BASE_URL+'/loginFarmer', farmer);
    }
    getAllFarmer(){
        return axios.get(FARMER_API_BASE_URL+'/viewFarmer');
    }
}

export default new FarmerService();