import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadBookRequests } from '../redux/actions/bookRequest';

export const BookRequestTable = () => {


  const { bookRequests } = useSelector(state => state.bookRequestReducer);



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookRequests());

  }, []);


  return (
    <div className="col-9 d-flex  justify-content-center flex-column">

      <div className="container col-12 overflow-auto ">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Get</th>
              <th scope="col">Return</th>
              <th scope="col">Duration</th>
              <th scope="col">User</th>
              <th scope="col">Book</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookRequests &&
              bookRequests.map((br, i) => (
                <tr key={br.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{br.id}</td>
                  <td>{br.get}</td>
                  <td>{br.return}</td>
                  <td>{br.duration}</td>
                  <td>{br.user}</td>
                  <td>{br.book}</td>
                  <td className='d-flex flex-column'>
                    <NavLink
                      className="btn btn-outline-primary btn-sm"
                      to={`/updateBookRequest/${br.id}`}
                    >
                      Update
                    </NavLink>



                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <NavLink
        className="iconplus col-1 pt-2 pb-2 rounded-5 btn btn-primary align-self-end"
        to="/addBookRequest"
      >
        <i className="fas fa-plus fs-5"></i>
      </NavLink>
    </div>
  );
}
