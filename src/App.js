import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import GenresIndex from './containers/GenresIndex'
import Navigation from './components/Navigation';
import BooksIndex from './containers/BooksIndex';
import NewBookForm from './components/Books/NewBookForm';
import BookShow from './containers/BookShow'

function App() {
  return (
    <Router> 
      <Navigation/>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/genres' component={GenresIndex}/> 
          <Route exact path='/genres/:genre_id/books' component={BooksIndex}/> 
          <Route exact path='/genres/:genre_id/books/new' component={NewBookForm}/> 
          <Route exact path='/genres/:genre_id/books/:id' component={BookShow}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
