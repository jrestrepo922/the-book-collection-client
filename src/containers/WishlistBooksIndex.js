import React, { Component } from 'react'
import Book from '../components/Books/Book'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGenres } from '../actions/genres'

class WishlistBooksIndex extends Component {

    componentDidMount(){
        this.props.getGenres()
    }



    render() {
        let books = []
        this.props.genre.forEach(genre  => { 

            if(!(genre.books.length === 0)){
                genre.books.forEach(book => {
                    books.push(book)
                })
            }
        });

        books = books.filter(book => book.wishlist_item === true).map(book => {
            return <Book key={book.id} book={book}/>
        })

        return (
            <div>
            <div>
                {this.props.loading ? <h3>Loading......</h3>: books}    
                <Link
                to={`/wishlist/books/new`}>
                <button
                >Add Book To WishList</button>
                </Link> 
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        genre: state.genresReducer.genres, 
        loading: state.genresReducer.loading
    }
}

export default connect(mapStateToProps, { getGenres })(WishlistBooksIndex);