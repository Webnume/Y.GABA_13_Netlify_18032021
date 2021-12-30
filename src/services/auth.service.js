import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      email: username,
      password,
    })
    .then((response) => {
      if (response.data.body.token) {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.body.token;
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      // console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userData");
};

const exportTemp = {
  login,
  logout,
};

export default exportTemp;
