import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/user/login`, { email, password })
      .then((resp) => {
        localStorage.setItem("token", resp.data.body.token);
        console.log("token", resp.data.body.token);

        dispatch({
          type: "SIGN_IN",
          token: resp.data.body.token,
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

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_USER",
    });
    
    dispatch({
      type: "SIGN_OUT",
    });

  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};
