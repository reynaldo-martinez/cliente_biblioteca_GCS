import { types } from "../types";


export const userReducer = (state = {}, action) => {
    switch (action.type) {
      case types.setUsers:
        return {
          users: action.payload.users,
        };
  
        break;
  
      default:
        return state;
        break;
    }
  };