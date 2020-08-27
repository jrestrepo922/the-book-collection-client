import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBook, getBooks } from '../../actions/books'
import BookPurchaseCheckBox from './BookPurchaseCheckBox'
import BookReadCheckBox from './BookReadCheckBox'



class EditBookForm extends Component {

    

    state = {
        title: this.props.books.filter(book => book.id === parseInt(this.props.match.params.id))[0].title,
        description: this.props.books.filter(book => book.id === parseInt(this.props.match.params.id))[0].description, 
        author: this.props.books.filter(book => book.id === parseInt(this.props.match.params.id))[0].author, 
        completed: false, 
        format: this.props.books.filter(book => book.id === parseInt(this.props.match.params.id))[0].format,
        image: this.props.books.filter(book => book.id === parseInt(this.props.match.params.id))[0].image,
        wishlistItem: this.props.books.filter(book => book.id === parseInt(this.props.match.params.id))[0].wishlist_item

    }

    correctBook = () => {
        return this.props.books.filter(book => book.id === parseInt(this.props.match.params.id))[0]
    }
   

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    componentDidMount(){
        this.props.getBooks(this.props.match.params.genre_id)
    }


    handleChangeCheckBoxRead = (event) => {

        if (event.target.checked){
            
            this.setState({
                completed: true
            }) 
        }  
    }


    handleChangeCheckBoxPurchased = (event) => {

        if (event.target.checked){
            
            this.setState({
                wishlistItem: false
            }) 
        }  
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const book = {
            title: this.state.title,
            description: this.state.description, 
            author: this.state.author, 
            completed: this.state.completed, 
            format: this.state.format,
            image: this.state.image,
            wishlist_item: this.state.wishlistItem
        }
        this.props.editBook(this.props.match.params.id, this.props.match.params.genre_id, book)
        this.setState({
            title: '',
            description: '', 
            author: '', 
            completed: false, 
            format: '',
            image: ''
        })
        this.props.history.push(`/genres/${this.props.match.params.genre_id}/books/${this.props.match.params.id}`)
    }

    render() {
        // const book = this.props.books.filter(book => book.id === parseInt(this.props.match.params.id))[0]

        return (
            
            
            
            <div>
                <h2>Create New Book</h2>
                <p>Please fill in this form to create a new book</p>
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

                    {this.state.wishlistItem ? 
                        <BookPurchaseCheckBox handleOnChangeCheckBoxPurchased={this.handleChangeCheckBoxPurchased}/>  
                        : <BookReadCheckBox handleOnChangeCheckBoxRead={this.handleChangeCheckBoxRead} /> }


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
        books: state.booksReducer.books
    }
}

// <Link
// to={`/genres/${this.props.match.params.genre_id}/books`}>
//     <input type="submit" id="submitBtn"></input>
// </Link>

export default connect(mapStateToProps, { editBook, getBooks } )(EditBookForm);