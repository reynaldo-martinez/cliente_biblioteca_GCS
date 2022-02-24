import { types } from "../types";

export const booksReducer = (state={}, action)=>{
    switch (action.type) {
        case types.setBooks:
                return{
                    books : action.payload.books
                }
            break;
    
        default:
            return state
            break;
    }
}