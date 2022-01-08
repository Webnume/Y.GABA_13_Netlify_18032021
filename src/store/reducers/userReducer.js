import { toast } from "react-toastify";

const userReducer = (user = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      // toast.success("You are connected...", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });
      return action.user.data.body;
    case "UPDATE_USER":
      toast.success("Your profile was updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return user;
    case "CLEAR_USER":
      return {};
    default:
      return user;
  }
};

export default userReducer;
