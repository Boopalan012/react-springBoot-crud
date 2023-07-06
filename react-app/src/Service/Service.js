import axios from 'axios';

const URL="http://localhost:8080/students";

class Service{
    getEmployee(){
        return axios.get(URL);
    }
}
export default new Service();