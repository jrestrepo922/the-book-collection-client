import React, { Component } from 'react'

class NewGenreForm extends Component {
    state = {
        genreName: ""
    }
    
    handleChange = (event) => {
        this.setState({
            genreName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let stringArray = this.state.genreName.split(" ")
        let capitalizeArray = stringArray.map(word =>  {
            return (word.charAt(0).toUpperCase() + word.slice(1))
          })
        let capitalizeStringArray = capitalizeArray.join(" ")
        const genre = {genre_name: capitalizeStringArray}
        this.props.addGenre(genre)
        this.setState({
            genreName: ""
        })
    }

    render() {
        return (
            <div>
                <h2>Create New Genre</h2>
                <p>Please fill in this form to create a new genre</p>
                <form onSubmit={this.handleSubmit}>
                    <label >Genre Name: </label><br></br> 
                    <input 
                    type="text" 
                    name="genreName" 
                    id="genreName"
                    onChange={this.handleChange}
                    value={this.state.genreName}/><br></br>
                    <input type="submit" id="submitBtn"></input>
                </form>
                
            </div>
        )
    }
}

export default NewGenreForm;