import { types } from "../types";


export const bookRequestReducer = (state={}, action)=>{
    switch (action.type) {
        case types.setBookRequests:
                return{
                    bookRequests : action.payload.bookRequests
                }
            break;
    
        default:
            return state
            break;
    }
}