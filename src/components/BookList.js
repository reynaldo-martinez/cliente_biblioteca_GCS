import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { loadData } from '../redux/actions/books'
import { BookCard } from './BookCard'


export const BookList = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const { books } = useSelector(state => state.booksReducer);



  return (
    <div className="bookList__list">
      <div className="bookList__iconplus">
        <NavLink className="iconplus" to="/addBook">
          <i className="fas fa-plus"></i>
        </NavLink>
      </div>
      {
        books
        &&
        books.map((book) => (
          <BookCard
            key={book.title}
            book={book}
          />
        ))
      }

    </div>
  );
}
