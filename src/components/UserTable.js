import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadUsers } from '../redux/actions/user';

export const UserTable = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
       
    }, [])
    const {users} = useSelector( state => state.userReducer);
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
              {users &&
                users.map((user, i) => (
                  <tr key={user.name}>
                    <th scope="row">{i + 1}</th>
                    <td>{user.name}</td>
                    <td>
                      <NavLink
                        className="btn btn-outline-primary btn-sm"
                        to={`/updateUser/${user.name}`}
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
          to="/addUser"
        >
          <i className="fas fa-plus fs-5"></i>
        </NavLink>
      </div>
    );
}
