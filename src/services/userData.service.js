import {
  fetchUserPending,
  fetchUserSuccess,
  fetchUserError,
} from "../actions/userData";

// console.log((user.body.token));

function fetchUser() {
  return (dispatch) => {
    dispatch(fetchUserPending());

    const userString = JSON.parse(localStorage.getItem("userData"));
    // console.log(">>>", userString, typeof userString);
    if (userString !== null) {
      console.log("xx !null", userString);
      dispatch(fetchUserSuccess(userString));
      return;
    }

    console.log("XxX null", userString);

    const user = JSON.parse(localStorage.getItem("user"));
    
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.body.token,
      },
      // body: "",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res, typeof res);
        localStorage.setItem("userData", JSON.stringify(res.body));
        dispatch(fetchUserSuccess(res.body));
        // console.log(res, typeof res);
        // console.log(res.body);
        return res.body;
      })
      .catch((error) => {
        dispatch(fetchUserError(error));
      });
  };
}

export default fetchUser;
