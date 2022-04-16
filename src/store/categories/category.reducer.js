import { CATEGORIES_ACTION_TYPE } from "./category.types";

const INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
