import * as actionTypes from "./actionTypes";
import { post, get, put } from "../../utils/apiRequest";

export const userStart = () => {
  return {
    type: actionTypes.GET_ALL_USERS_START
  };
};

export const userSuccess = data => {
  return {
    type: actionTypes.GET_ALL_USERS_SUCCESS,
    data
  };
};

export const users = () => {
  return async dispatch => {
    try {
      dispatch(userStart());
      let url = "users";
      const result = await get(url);
      const jsonData = await result.data;
      console.log(jsonData);
      dispatch(userSuccess(jsonData));
    } catch (error) {
      console.log(error);
    }
  };
};
