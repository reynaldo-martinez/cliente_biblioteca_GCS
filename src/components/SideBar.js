import React from 'react'
import {NavLink} from 'react-router-dom'

export const SideBar = () => {
    return (
        <div className='sideBar__Navbar'>
            <ul className='animate__animated animate__backInLeft'>
                <NavLink className='sideBar__navlink home-icon' to='/'><i className="fas fa-home mt-1"></i>Home</NavLink>
                <NavLink className='sideBar__navlink' to='/books'><i className="fas fa-book mt-1"></i>Books</NavLink>
                <NavLink className='sideBar__navlink' to='/authors'><i className="fas fa-male mt-1"></i>Authors</NavLink>
                <NavLink className='sideBar__navlink' to='/users'><i className="fas fa-users mt-1"></i>Users</NavLink>
                <NavLink className='sideBar__navlink' to='/bookRequest'><i className="fas fa-book-open mt-1"></i>Book Request</NavLink>
            </ul>
        </div>
    )
}
