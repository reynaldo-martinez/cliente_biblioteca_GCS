import { types } from "../types"

export const loadData = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(" http://localhost:4000/books");
      const books = await res.json();
      dispatch(setBooks(books))
    } catch (error) {
      console.log(error);
    }
  };
};

export const setBooks = (books)=>{
    return{
        type : types.setBooks,
        payload : {
            books
        }
    }
}