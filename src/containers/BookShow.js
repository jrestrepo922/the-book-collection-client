import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks, deleteBook } from '../actions/books'
import BookShowComponent from '../components/Books/BookShowComponent'

class BookShow extends Component {

componentDidMount(){
    this.props.getBooks(this.props.match.params.genre_id,  this.props.match.params.id)
}

handleClick = (event) => {
    let idGrenreIdArray = event.target.id.split(" ")
    let genreId = parseInt(idGrenreIdArray[0])
    let id = parseInt(idGrenreIdArray[1])
    this.props.deleteBook(genreId, id)
}


    render() {
        const findBook = this.props.books.filter(book => book.id.toString() === this.props.match.params.id) 

        const displayFoundBook = findBook.map(book => {
            return <BookShowComponent book={book} key={book.id} handleClick={this.handleClick}/>
        })
        return (
            <div>
                {this.props.loading ? <h3>Loading......</h3>: displayFoundBook}
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

export default connect(mapStateToProps, { getBooks, deleteBook } )(BookShow);