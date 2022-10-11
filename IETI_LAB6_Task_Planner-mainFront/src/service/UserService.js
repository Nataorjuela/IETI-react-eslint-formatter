import axios from "axios";

const USERS_REST_API_URL_LOCAL =
  "http://localhost:8080/v1/user";

class UserService {
  getUsers() {
    return axios.get(USERS_REST_API_URL_LOCAL);
  }
}

export default new UserService();
