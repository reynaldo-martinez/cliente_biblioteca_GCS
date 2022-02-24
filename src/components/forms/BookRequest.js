import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import {useForm} from '../../hooks/useForm'
import { loadData } from '../../redux/actions/books';
import { loadUsers } from '../../redux/actions/user';

export const BookRequest = () => {

 const dispatch = useDispatch()
 const history = useHistory()
  
  
  const [formValues, handleInputChange, reset] = useForm({
    userSelected: "",
    bookSelected: "",
    getDate: "",
    returnDate : "",
    units: 1
  });
  
  const { userSelected, bookSelected, getDate, returnDate, units } = formValues;

  useEffect(() => {
    dispatch(loadData())
    dispatch(loadUsers())
  }, [])

  const {books} = useSelector( (state) => state.booksReducer );
  const {users} = useSelector( state => state.userReducer );

  
  const handleSubmit = async (e) => {
   e.preventDefault();

    try {
      
        await fetch("http://localhost:4000/requests", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fromDate: getDate,
            toDate: returnDate,
            user: userSelected,
            book: bookSelected,
            units: units
          }),
        });

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Request added successfuly",
          showConfirmButton: false,
          timer: 2000,
        });

        history.push("/bookRequest");
      
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <div className="forms__formRequest">
        <form className="col-7 animate__animated animate__fadeInDown" onSubmit={handleSubmit}>
          <fieldset>
            <legend>NEW REQUEST</legend>

            <div className="mb-3">
              <label for="userSelected" class="form-label">
                User
              </label>
              <select name="userSelected" class="form-select" value={userSelected} onChange={handleInputChange}>
                {users &&
                  users.map((u) => <option key={u.name}>{u.name}</option>)}
              </select>
            </div>

            <div className="mb-3">
              <label for="bookSelected" class="form-label" >
                Book
              </label>
              <select name="bookSelected" class="form-select" onChange={handleInputChange}  value={bookSelected}>
              {books &&
                  books.map((b) => <option key={b.title}>{b.title}</option>)}
              </select>
            </div>

            <div className="mb-3">
              <label for="getDate" class="form-label">
                Get Date
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleInputChange}
                value={getDate}
                autoComplete="off"
                required
                placeholder="YYYY-MM-DD"
                name='getDate'
              />
            </div>

            <div className="mb-3">
              <label for="returnDate" class="form-label">
                Return Date
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleInputChange}
                value={returnDate}
                autoComplete="off"
                required
                placeholder="YYYY-MM-DD"
                name='returnDate'
              />
            </div>

            <div className="mb-3">
              <label for="returnDate" class="form-label">
                Units
              </label>

              <input
                type="number"
                autoComplete="off"
                className="form-control"
                placeholder="Units"
                name="units"
                value={units}
                onChange={handleInputChange}
                min="1"
                max="5"
              />
            </div>

            <button type="submit" className="btn btn-outline-dark col-12">
              Send Request
            </button>
          </fieldset>
        </form>
      </div>
    );
}
