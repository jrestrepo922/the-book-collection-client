import React, { Component } from 'react'
import Book from '../components/Books/Book'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBooks } from '../actions/books'


class BooksIndex extends Component {

    componentDidMount(){
        this.props.getBooks(this.props.match.params.genre_id)
    }
    
    render() {
        const books = this.props.books.map(book => {
            return <Book key={book.id} book={book}/>
        })
        return (
            <div>
                {this.props.loading ? <h3>Loading......</h3>: books}    
                <Link
                to={`/genres/${this.props.match.params.genre_id}/books/new`}>
                <button
                >Add A New Book</button>
                </Link> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.booksReducer.books,
        loading: state.booksReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (genre_id) => dispatch(getBooks(genre_id))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(BooksIndex);