export const getBooks = (genre_id) => {
    return dispatch => { // first dispatch is to get the process going and second to fire off when fetch is done
        dispatch({type: "LOADING_BOOKS"})
        return fetch(`http://localhost:3001/genres/${genre_id}/books`)
        .then(res => res.json())
        .then(books => dispatch({type: "BOOKS_LOADED", payload: books}))
    }
}

export const addBook = (book, genreId)  => {
    return dispatch => {
        dispatch({type: "ADDING_BOOK"})
        return fetch(`http://localhost:3001/genres/${genreId}/books`, {
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(genre => dispatch({type: "BOOK_ADDED", payload: genre}))
    }
}


// export const getBook = (genre_id, id) => {
//     return dispatch => { // first dispatch is to get the process going and second to fire off when fetch is done
//         dispatch({type: "LOADING_BOOK"})
//         return fetch(`http://localhost:3001/genres/${genre_id}/books/${id}`)
//         .then(res => res.json())
//         .then(books => dispatch({type: "BOOK_LOADED", payload: books}))
//     }
// }
