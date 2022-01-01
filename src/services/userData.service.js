import {
  fetchUserPending,
  fetchUserSuccess,
  fetchUserError,
} from "../actions/userData";

// console.log((user.body.token));

function fetchUser() {
  return async (dispatch) => {
    try {
      // console.log(dispatch);
      console.log("dipatch chargement");
      dispatch(fetchUserPending());

      const userString = JSON.parse(localStorage.getItem("userData"));
      // console.log(">>>", userString, typeof userString);
      if (userString !== null) {
        dispatch(fetchUserSuccess(userString));
        console.log("dispacth données localstorage", userString);
        return;
      }

      // console.log("XxX null", userString);

      const user = JSON.parse(localStorage.getItem("user"));

      const res = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.body.token,
        },
        // body: "",
      });

      const userData = await res.json();
      localStorage.setItem("userData", JSON.stringify(userData.body));
      console.log(
        "didpacth après fetch",
        userData,
        typeof userData,
        userData.body
      );
      dispatch(fetchUserSuccess(userData.body));
      // console.log(userData, typeof userData);
      // console.log(userData.body);
      return userData.body;
    } catch (error) {
      dispatch(fetchUserError(error));
    }
  };
}

export default fetchUser;
