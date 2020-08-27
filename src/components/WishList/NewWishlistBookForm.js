import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../actions/books'
import { getGenres } from '../../actions/genres'

class NewWishlistBookForm extends Component {
    state = {
        title: '',
        description: '', 
        author: '', 
        completed: false, 
        format: '',
        image: '',
        wishlistItem: true,
        genreId: '' 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit= (event) => {
        event.preventDefault();
        const book = {
            title: this.state.title,
            description: this.state.description, 
            author: this.state.author, 
            completed: this.state.completed, 
            format: this.state.format,
            image: this.state.image,
            wishlist_item: this.state.wishlistItem,
            genre_id: this.state.genreId
        }
        
        this.props.addBook(book, this.state.genreId)
        this.setState({
            title: '',
            description: '', 
            author: '', 
            completed: false, 
            format: '',
            image: '', 
            wishlistItem: true,
            genreId: ''
        })
        this.props.history.push(`/wishlist/books`)
    }

    componentDidMount(){
        this.props.getGenres()
    }

    render() {
        const genres = this.props.genres.map((genre, id) => {
            return <option value={`${genre.id}`} key={id}>{genre.genre_name}</option>
        })
        return (
            <div>
            <h2>Create New Wishlist Book</h2>
            <p>Please fill in this form to create a new Wishlist Book</p>
                <form onSubmit={this.handleSubmit}>
                    <label >Title: </label><br></br> 
                    <input 
                    type="text" 
                    name="title" 
                    id="title"
                    onChange={this.handleChange}
                    value={this.state.title}/><br></br>

                    <label >Description: </label><br></br> 
                    <input 
                    type="text" 
                    name="description" 
                    id="description"
                    onChange={this.handleChange}
                    value={this.state.description}/><br></br>

                    <label >Author: </label><br></br> 
                    <input 
                    type="text" 
                    name="author" 
                    id="author"
                    onChange={this.handleChange}
                    value={this.state.author}/><br></br>


                    <label >Select Genre: </label><br></br> 
                    <select onChange={this.handleChange} name="genreId">
                        <option ></option>
                        {genres}
                    </select><br></br>

                    <label >Format: </label><br></br> 
                    <input 
                    type="text" 
                    name="format" 
                    id="format"
                    onChange={this.handleChange}
                    value={this.state.format}/><br></br>

                    <label >Image: </label><br></br> 
                    <input 
                    type="text" 
                    name="image" 
                    id="image"
                    onChange={this.handleChange}
                    value={this.state.image}/><br></br>


                    <input type="submit" id="submitBtn"></input>

                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.genresReducer.genres
    }
}

export default connect(mapStateToProps, { addBook, getGenres })(NewWishlistBookForm);