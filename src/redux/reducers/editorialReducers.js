import { types } from "../types";


export const editorialReducer = (state = {}, action) => {
    switch (action.type) {
      case types.setEditorials:
        return {
          editorials: action.payload.editorials,
        };
  
        break;
  
      default:
        return state;
        break;
    }
  };