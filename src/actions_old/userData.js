import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "./types";


export function fetchUserPending() {
  return {
      type: FETCH_USER_PENDING
  }
}

export function fetchUserSuccess(userData) {
  return {
      type: FETCH_USER_SUCCESS,
      payload: userData
  }
}

export function fetchUserError(error) {
  return {
      type: FETCH_USER_ERROR,
      error: error
  }
}