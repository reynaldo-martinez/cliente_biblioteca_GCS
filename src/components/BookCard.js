import React, { useState } from 'react'


import { MyModal } from './MyModal';

export const BookCard = ({ book }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
  }




  return (
    <div className="card text-dark bg-light mr-2 mt-2 col-3" >
      <div className="card-header"><h5 className='class-title'>{book.title}</h5></div>
      <div className="card-body d-flex flex-column justify-content-center">
        <b className="card-title">Author: {book.author}</b>
        <span className="card-text">Category: {book.category}</span>
        <span className="card-text">Editorial: {book.editorial}</span>
        <button className="btn btn-primary col-3 align-self-end mt-3 rounded-pill" onClick={toggle}>
          <i className="far fa-edit text-light "></i>
        </button>
      </div>


      <MyModal book={book} modal={modal} setModal={setModal} />
    </div>
  );
}
