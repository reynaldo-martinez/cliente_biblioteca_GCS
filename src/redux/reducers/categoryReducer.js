import {types} from '../types'


export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case types.setCategories:
      return {
        categories: action.payload.categories,
      };

      break;

    default:
      return state;
      break;
  }
};