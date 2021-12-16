import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/profile";


const body = { lkjklj: 12 };

class UserService {
  getUserBoard() {
    return axios.post(API_URL, body);
  }
}

export default new UserService();
