import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../actions/books'
import { Container } from 'react-bootstrap'
import './NewBookForm.css'


class NewBookForm extends Component {
    state = {
        title: '',
        description: '', 
        author: '', 
        completed: false, 
        format: '',
        image: ''

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleChangeCheckBox = (event) => {
        if (event.target.checked){
            this.setState({
                completed: true
            })
        }    
    }

    handleSubmit= (event) => {
        event.preventDefault();
        const book = {
            title: this.state.title,
            description: this.state.description, 
            author: this.state.author, 
            completed: this.state.completed, 
            format: this.state.format,
            image: this.state.image
        }
        this.props.addBook(book, this.props.match.params.genre_id)
        this.setState({
            title: '',
            description: '', 
            author: '', 
            completed: false, 
            format: '',
            image: ''
        })
        this.props.history.push(`/genres/${this.props.match.params.genre_id}/books`)
    }

    render() {
        return (
            
            <Container className='new-book-form-container'>
                <h2>Create New Book</h2>
                <p>Please fill in this form to create a new book</p>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>
                    <label ><strong>Title:</strong> </label><br></br> 
                    <input 
                    type="text" 
                    name="title" 
                    id="title"
                    onChange={this.handleChange}
                    value={this.state.title}/><br></br>

                    <label ><strong>Description: </strong></label><br></br> 
                    <input 
                    type="text" 
                    name="description" 
                    id="description"
                    onChange={this.handleChange}
                    value={this.state.description}/><br></br>

                    <label ><strong>Author: </strong> </label><br></br> 
                    <input 
                    type="text" 
                    name="author" 
                    id="author"
                    onChange={this.handleChange}
                    value={this.state.author}/><br></br>

                    <label ><strong>Finish:</strong> </label><br></br> 
                    <input 
                    type="checkbox" 
                    name="completed" 
                    id="completed"
                    onChange={this.handleChangeCheckBox}
                    /><br></br><br></br>


                    <label ><strong>Format:</strong> </label><br></br> 
                    <input 
                    type="text" 
                    name="format" 
                    id="format"
                    onChange={this.handleChange}
                    value={this.state.format}/><br></br>

                    <label ><strong>Image:</strong> </label><br></br> 
                    <input 
                    type="text" 
                    name="image" 
                    id="image"
                    onChange={this.handleChange}
                    value={this.state.image}/><br></br>


                    <input type="submit" id="submitBtn"></input>

                    
                </form>
            </Container>
        )
    }
}

// <Link
// to={`/genres/${this.props.match.params.genre_id}/books`}>
//     <input type="submit" id="submitBtn"></input>
// </Link>

export default connect(null, { addBook } )(NewBookForm);