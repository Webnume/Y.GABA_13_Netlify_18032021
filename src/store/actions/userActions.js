import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getProfil = () => {
  return (dispatch) => {
    axios
      .post(`${url}/user/profile`, {}, setHeaders())
      .then((user) => {
        // console.log(user);
        dispatch({
          type: "GET_USER",
          user
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const updateUSer = (updatedUser) => {
  return (dispatch) => {
    axios
      .put(`${url}/user/profile`, updatedUser, setHeaders())
      .then((user) => {
        dispatch({
          type: "UPDATE_USER",
          user,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};