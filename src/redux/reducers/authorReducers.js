import { types } from "../types";


export const authorReducer = (state = {}, action) => {
    switch (action.type) {
      case types.setAuthors:
        return {
          authors: action.payload.authors,
        };
  
        break;
  
      default:
        return state;
        break;
    }
  };