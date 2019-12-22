import * as actionTypes from "./actionTypes";
import { get, post, put } from "../../utils/apiRequest";
import * as Cookie from "../../utils/Cookie";
import { ACCESS_TOKEN } from "../../utils/constant";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId, successMessage) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    auth: token,
    successMessage,
    userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password) => {
  return async dispatch => {
    dispatch(authStart());
    try {
      const auth = {
        email,
        password
      };
      let url = "login";
      const result = await post(url, auth);
      const jsonData = await result.data;
      console.log(jsonData);

      Cookie.createCookie(ACCESS_TOKEN, jsonData.data.token);
      dispatch(
        authSuccess(jsonData.data.token, jsonData.data.id, jsonData.message)
      );
    } catch (error) {
      dispatch(authFail(error.response.data.message));
    }
  };
};
