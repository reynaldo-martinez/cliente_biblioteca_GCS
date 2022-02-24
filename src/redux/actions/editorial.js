import { types } from "../types";

export const loadEditorials = () => {
    return async (dispatch) => {
      try {
        const res = await fetch(" http://localhost:4000/editorials");
        const editorials = await res.json();
        dispatch(setEditorials(editorials))
      } catch (error) {
        console.log(error);
      }
    }
  }



  export const setEditorials = (editorials)=>{
    return{
        type : types.setEditorials,
        payload : {
            editorials
        }
    }
}