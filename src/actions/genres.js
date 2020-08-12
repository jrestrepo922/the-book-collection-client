export const getGenres = () => {
    return dispatch => { // first dispatch is to get the process going and second to fire off when fetch is done
        dispatch({type: "LOADING_GENRES"})
        return fetch('http://localhost:3001/genres')
        .then(res => res.json())
        .then(genres => dispatch({type: "GENRES_LOADED", payload: genres}))
    }
}

export const addGenre = (genre)  => {
    return dispatch => {
        dispatch({type: "ADDING_GENRE"})
        return fetch('http://localhost:3001/genres', {
            method: "POST",
            body: JSON.stringify(genre),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(genre => dispatch({type: "GENRE_ADDED", payload: genre}))
    }
}


