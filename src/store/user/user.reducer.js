import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, isLoading: false };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
