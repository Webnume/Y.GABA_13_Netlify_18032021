import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "USER_LOADED":
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const user = jwtDecode(action.token); 
      return {
        ...initialState,
        token: action.token,
        id: user.id
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Goodbye...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
