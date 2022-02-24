import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { BookList } from '../components/BookList';
import { Book } from '../components/forms/Book';
import { Home } from '../components/Home'
import { SideBar } from '../components/SideBar';
import {Author} from '../components/forms/Author'
import { User } from '../components/forms/User';
import { BookRequest } from '../components/forms/BookRequest';
import { AuthorTable } from '../components/AuthorTable';
import { ModalAuthor } from '../components/forms/ModalAuthor';
import { UserModal } from '../components/UserModal';
import { UserTable } from '../components/UserTable';
import { BookRequestTable } from '../components/BookRequestTable';
import { RequestsModal } from '../components/RequestsModal';
import { UserFilterTable } from '../components/UserFilterTable';


export const AppRouter = () => {
    return (
      <Router>
        <div className='container1'>
        


          <SideBar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/books">
              <BookList />
            </Route>
            <Route path="/addBook">
              <Book />
            </Route>

            <Route path="/authors">
              <AuthorTable />
            </Route>
            <Route path="/addAuthor">
              <Author />
            </Route>
            <Route  path="/updateAuthor/:name">
              <ModalAuthor />
            </Route>

            <Route path="/users">
              <UserTable />
            </Route>
            <Route path="/addUser">
              <User />
            </Route>
            <Route exact path="/updateUser/:name">
              <UserModal />
            </Route>

            <Route exact path="/bookRequest">
              <BookRequestTable />
            </Route>
            <Route path="/addBookRequest">
              <BookRequest />
            </Route>
            <Route path="/updateBookRequest/:id">
              <RequestsModal />
            </Route>
            <Route path="/requestByUser/:user">
              <UserFilterTable />
            </Route>
          </Switch>

        </div>
      </Router>
    )
}
