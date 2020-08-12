import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBook } from '../actions/books'
import BookShowComponent from '../components/Books/BookShowComponent'

class BookShow extends Component {

componentDidMount(){
    debugger
    this.props.getBook(this.props.match.params.genre_id,  this.props.match.params.id)
}

    render() {
        const bookInArray = this.props.books.map(book => {
            return <BookShowComponent book={book}/>
        })
        return (
            <div>
                {bookInArray}
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

export default connect(mapStateToProps, { getBook } )(BookShow);