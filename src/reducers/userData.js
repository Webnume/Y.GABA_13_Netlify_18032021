import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "../actions/types";

// const user = JSON.parse(localStorage.getItem("user"));
// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

const userDataLocal = JSON.parse(localStorage.getItem("userData"));

const initialState = {
  pending: false,
  userData: userDataLocal ? userDataLocal : {},
  error: null,
};

export default function userDataReducer(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        userData: payload,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: error,
      };
    default:
      return state;
  }
}

// export const getUser = state => state.userData;
// export const getUserPending = state => state.pending;
// export const getUserError = state => state.error;
