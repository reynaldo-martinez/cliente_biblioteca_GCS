import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';

export const User = () => {
    const history = useHistory()

    const [formValues, handleInputChange] = useForm({
      name: "",
    });
    const { name } = formValues;
    const {users} = useSelector( state => state.userReducer );

    const handleSubmitUser= async(e)=>{
      e.preventDefault()

        try {
            const filter = users.filter((u) => u.name === name);
  
            if (filter.length > 0) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "this user already exists",
              });
              
            } else {
              await fetch("http://localhost:4000/users", {
                method: "POST",
                headers: {
                  'Accept': "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name
                }),
              });
  
              Swal.fire({
                position: "top",
                icon: "success",
                title: "user added successfuly",
                showConfirmButton: false,
                timer: 2000,
              });
  
              
            }
          } catch (error) {
            console.log(error);
          }

          history.push("/users")

    }


    return (
      <form
        className="forms__form animate__animated animate__fadeInDown"
        onSubmit={handleSubmitUser}
        autoComplete="off"
      >
        <input
          type="text"
          className="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete='off'
          required
        />
        <input className="forms__submit" type="submit" value="Add User" />
      </form>
    );
}
