import { types } from "../types";

export const loadBookRequests = () => {
    return async (dispatch) => {
      try {
        const res = await fetch(" http://localhost:4000/requests");
        const bookRequests = await res.json();
        dispatch(setBookRequests(bookRequests))
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const setBookRequests = (bookRequests)=>{
      return{
          type : types.setBookRequests,
          payload : {
            bookRequests
          }
      }
  }