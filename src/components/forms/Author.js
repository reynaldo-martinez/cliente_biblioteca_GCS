import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';

export const Author = () => {

    const history = useHistory()
    const [formValues, handleInputChange] = useForm({
        name: ""
      });
      const { name } = formValues;
      const {authors} = useSelector( state => state.authorReducer );
      

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const filter = authors.filter((a) => a.name === name);

          if (filter.length > 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "this author already exists",
            });
            history.push("/authors");
          } else {
            await fetch("http://localhost:4000/authors", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
              }),
            });

            Swal.fire({
              position: "top",
              icon: "success",
              title: "author added successfuly",
              showConfirmButton: false,
              timer: 2000,
            });

            history.push("/authors");
          }
        } catch (error) {
          console.log(error);
        }
      };



    return (
      <div className="container col-6 d-flex align-items-center justify-content-center mt-5 shadow animate__animated animate__fadeInDown">
        <form className="col-7 animate__animated animate__fadeInDown ">
          <fieldset>
            <legend>NEW AUTHOR</legend>
            <div className="mb-3">
              <label for="name" class="form-label mt-2">
                Author Name
              </label>
              <input type="text" name="name" className="form-control" value={name} onChange={handleInputChange} autoComplete='off' required />
            </div>

            <button type="submit" className="btn btn-outline-dark col-12" onClick={handleSubmit}>
              Add Author
            </button>
          </fieldset>
        </form>
      </div>
    );
}
