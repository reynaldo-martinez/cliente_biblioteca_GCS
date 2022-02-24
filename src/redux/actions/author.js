import { types } from "../types";

export const loadAuthors = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(" http://localhost:4000/authors");
      const authors = await res.json();
      dispatch(setAuthors(authors))
    } catch (error) {
      console.log(error);
    }
  }
}



export const setAuthors = (authors) => {
  return {
    type: types.setAuthors,
    payload: {
      authors
    }
  }
}







