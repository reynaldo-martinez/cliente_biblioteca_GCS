import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'
import { loadAuthors } from '../../redux/actions/author'
import { loadCategories } from '../../redux/actions/category'
import { loadEditorials } from '../../redux/actions/editorial'
import { loadData } from '../../redux/actions/books'


export const Book = () => {
  const history = useHistory();
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadAuthors());
    dispatch(loadEditorials());

  }, [dispatch]);

  const { categories } = useSelector((state) => state.categoryReducer);
  const { authors } = useSelector((state) => state.authorReducer);
  const {editorials} = useSelector( state => state.editorialReducer );
  const {books} = useSelector( state => state.booksReducer );

  

  
  const [formValues, handleInputChange, reset] = useForm({
    tittle: "",
    selectedCategory: "",
    selectedAuthor: "",
    selectedEditorial : "",
    units: 1,
  });
  const { tittle, selectedCategory, selectedAuthor,selectedEditorial, units } = formValues;

  const handleSubmitBook = async (e) => {
    e.preventDefault();

    try {
      const filter = books.filter((b) => b.title === tittle);

      if (filter.length > 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "this book already exists",
        });
        history.push("/books");
      } else {
        await fetch("http://localhost:4000/books", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: tittle,
            author: selectedAuthor,
            category: selectedCategory,
            editorial: selectedEditorial,
            units: units,
          })
        });

        Swal.fire({
          position: "top",
          icon: "success",
          title: "book added successfuly",
          showConfirmButton: false,
          timer: 2000,
        });

        history.push("/books");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="forms__form animate__animated animate__fadeInDown"
      onSubmit={handleSubmitBook}
    >
      <input
        type="text"
        autoComplete="off"
        className="text"
        placeholder="Tittle"
        name="tittle"
        value={tittle}
        onChange={handleInputChange}
        required
      />

      <label for="selectedAuthor" className="text-light fw-lighter">
        Author
      </label>
      <select
        name="selectedAuthor"
        className="forms__books-select"
        onChange={handleInputChange}
        value={selectedAuthor}
      >
        {authors &&
          authors.map((author) => (
            <option className="forms__books-option" key={author.name}>
              {author.name}
            </option>
          ))}

        <option className="forms__books-option">Select an author</option>
      </select>

      <label for="selectedEditorial" className="text-light fw-lighter">
        Editorial
      </label>

      <select name="selectedEditorial" className="forms__books-select" value={selectedEditorial} onChange={handleInputChange}>
        {editorials &&
          editorials.map((editorial) => (
            <option className="forms__books-option" key={editorial.name}>
              {editorial.name}
            </option>
          ))}
      </select>


      <label for="selectedCategory" className="text-light fw-lighter">
        Category
      </label>
      <select
        name="selectedCategory"
        className="forms__books-select"
        id="category"
        onChange={handleInputChange}
        value={selectedCategory}
      >
        {categories &&
          categories.map((category) => (
            <option className="forms__books-option" key={category.name}>
              {category.name}
            </option>
          ))}
      </select>


      <label for="units" className="text-light fw-lighter">
        Units
      </label>

      <input
        type="number"
        autoComplete="off"
        className="text"
        placeholder="Units"
        name="units"
        value={units}
        onChange={handleInputChange}
        min="1"
        max="100"
      />

      <input className="forms__submit" type="submit" value="Add Book" />
    </form>
  );
};
