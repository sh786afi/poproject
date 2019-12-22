import * as actionTypes from "../actions/actionTypes";
const initialState = {
  userslist: null,
  loading: false
};

const reducerUser = (state = initialState, action) => {
  switch (action.Type) {
    case actionTypes.GET_ALL_USERS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        userslist: action.data
      };
    default:
      break;
  }
  return reducerUser;
};

export default reducerUser;
