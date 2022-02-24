import { types } from "../types";

export const loadCategories = () => {
    return async (dispatch) => {
      try {
        const res = await fetch(" http://localhost:4000/categories");
        const categories = await res.json();
        dispatch(setCategories(categories))
      } catch (error) {
        console.log(error);
      }
    }
  }



  export const setCategories = (categories)=>{
    return{
        type : types.setCategories,
        payload : {
            categories
        }
    }
}