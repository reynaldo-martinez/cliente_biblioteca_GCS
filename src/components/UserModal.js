import React from 'react'
import { useHistory, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';

export const UserModal = () => {

    const [formValues, handleInputChange] = useForm({
        newName:''
      });
      const { newName } = formValues;
      const history = useHistory()
      const {name} = useParams()

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await fetch(`http://localhost:4000/users/${name}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              newName,
            }),
          });

          Swal.fire({
            position: "top",
            icon: "success",
            title: "author updated successfuly",
            showConfirmButton: false,
            timer: 2000,
          });

        } catch (error) {
            console.log(error);
        }
        history.push("/users");
      };
    return (
      <div className="container col-6 d-flex align-items-center justify-content-center mt-5 shadow animate__animated animate__fadeInDown">
        <form onSubmit={handleSubmit} className="col-8">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              New name for {name}
            </label>
            <input
              required
              type="text"
              class="form-control"
              name="newName"
              aria-describedby="emailHelp"
              autoComplete="off"
              onChange={handleInputChange}
              value={newName}
              
            />
          </div>
          <button type="submit" class="btn btn-primary col-12">
            Update User
          </button>
        </form>
      </div>
    );
}
