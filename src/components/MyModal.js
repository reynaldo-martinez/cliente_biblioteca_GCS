import React from 'react'
import Swal from 'sweetalert2'

import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory } from 'react-router';


export const MyModal = ({modal, setModal, book}) => {

  const history = useHistory()

    const toggle = ()=>{
        setModal(!modal)
    }

    const handleSubmit =async (e)=>{
      
      const newTitle = document.querySelector('#newTitle').value
      
      
        await fetch( `http://localhost:4000/books/${book.title}`, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newTitle
          })
        });

        
        Swal.fire({
          position: "top",
          icon: "success",
          title: 'book updated successfuly',
          showConfirmButton: false,
          timer: 2000,
        });
        history.push("/books");


      
      
      }

    
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{book.title}</ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div class="mb-3">
                <label for="newName" class="form-label">
                  New book title
                </label>
                <input
                  type="text"
                 name="newName"
                  className="form-control"
                  placeholder="New Book Name"
                  autoComplete = 'off'
                  id='newTitle'
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary col-12">
                Update
              </button>
            </fieldset>
          </form>
        </ModalBody>

        <ModalFooter>
          <h5 className='text-warning'>You can only update the book title</h5>
        </ModalFooter>
      </Modal>
    );
}
