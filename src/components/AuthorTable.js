import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadAuthors } from '../redux/actions/author';
import { ModalAuthor } from './forms/ModalAuthor';


export const AuthorTable = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAuthors());
       
    }, [])
    const {authors} = useSelector( state => state.authorReducer );
    
    return (
      <div className="col-9 d-flex align-items-center justify-content-center flex-column">
        <div className="container col-8 overflow-auto ">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
               
              {authors &&
                authors.map((author, i) => (
                    <tr key={author.name}>
                      <th scope="row">{i + 1}</th>
                      <td>{author.name}</td>
                      <td><NavLink className='btn btn-outline-primary btn-sm' to={`/updateAuthor/${author.name}`}>Update</NavLink></td>

                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        <NavLink
          className="iconplus col-1 pt-2 pb-2 rounded-5 btn btn-primary align-self-end"
          to="/addAuthor"
        >
          <i className="fas fa-plus fs-5"></i>
        </NavLink>
      </div>
    );
}
