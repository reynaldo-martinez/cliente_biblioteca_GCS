import { types } from "../types";

export const loadUsers = () => {
    return async (dispatch) => {
      try {
        const res = await fetch(" http://localhost:4000/users");
        const users = await res.json();
        dispatch(setUsers(users))
      } catch (error) {
        console.log(error);
      }
    }
  }



  export const setUsers = (users)=>{
    return{
        type : types.setUsers,
        payload : {
            users
        }
    }
}