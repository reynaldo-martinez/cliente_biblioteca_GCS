import React from 'react'
import { useHistory, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';

export const RequestsModal = () => {

    const [formValues, handleInputChange] = useForm({
        newToDate: ''
      });
      const { newToDate } = formValues;
      const history = useHistory()
      const {id} = useParams()
      


      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await fetch(`http://localhost:4000/requests/${id}`, {
            method: "PUT",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              newToDate
            }),
          });
          
          Swal.fire({
            position: "top",
            icon: "success",
            title: "request return date updated successfuly",
            showConfirmButton: false,
            timer: 2000,
          });
          history.push("/bookRequest");
          
        } catch (error) {
            console.log(error);
        }
      };
    return (
      <div className="container col-6 d-flex align-items-center justify-content-center mt-5 shadow animate__animated animate__fadeInDown">
        <form onSubmit={handleSubmit} className="col-8">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              New return date for request with id: {id}
            </label>
            <input
              required
              type="text"
              class="form-control"
              name="newToDate"
              aria-describedby="emailHelp"
              autoComplete="off"
              onChange={handleInputChange}
              value={newToDate}
              placeholder='YYYY-MM-DD'
            />
          </div>
          <button type="submit" class="btn btn-primary col-12">
            Update Request
          </button>
        </form>
      </div>
    );
}
