import React, { Component } from 'react'
import Genre from '../components/Genres/Genre'
import NewGenreForm from '../components/Genres/NewGenreForm'
import { connect } from 'react-redux'
import { getGenres, addGenre, deleteGenre } from '../actions/genres'
import './GenresIndex.css'
import { Row } from 'react-bootstrap'

class GenresIndex extends Component {
    componentDidMount(){
        this.props.getGenres()
    }

    handleClick = (event) => {
        this.props.deleteGenre(parseInt(event.target.id))
    }
    
    render() {
        const genres = this.props.genres.map(genre => {
            return (
                <Genre key={genre.id} genre={genre} handleClick={this.handleClick}/>
            )
        })
        return (
            <div>
                <div className="genre-buttons-container">
                    <Row>
                    {this.props.loading ? <h3>Loading......</h3>: genres} 
                    </Row>
                </div>
                <div className="genre-form-contaner">
                    <NewGenreForm addGenre={this.props.addGenre}/>
                </div>
                
            </div>
        )
    }
}

// gets the values of whatever the store has(reducer) and allows us to use them in this component as props
const mapStateToProps = (state) => {
    return {
        genres: state.genresReducer.genres,
        loading: state.genresReducer.loading
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getGenres: () => dispatch(getGenres()),
//         addGenre: (genre) => dispatch(addGenre(genre))
//     }
// }

export default connect(mapStateToProps, { getGenres, addGenre, deleteGenre })(GenresIndex)
