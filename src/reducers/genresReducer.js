export default (state = { genres: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_GENRES":
            return {
                ...state,
                loading: true
            }
        case "GENRES_LOADED":
            return {
                ...state,
                genres: action.payload,
                loading: false
            }

        case "ADDING_GENRE":
            return{
                ...state,
                loading: true
            }

        case 'GENRE_ADDED':
            let duplicate = state.genres.filter(genre => genre.genre_name.toLowerCase() === action.payload.genre_name.toLowerCase())
            if(duplicate.length === 0){
                return{
                    ...state,
                    genres: [...state.genres, action.payload],
                    loading: false
                }
            } else {
                return{
                    ...state,
                    genres: [...state.genres],
                    loading: false
                }
            }

        case "DELETING_GENRE":
            return {
                ...state, 
                loading: true 
            }

        case "GENRE_DELETED":
            return {
                ...state,
                genres: [...state.genres.filter(genre => genre.id !== action.payload)],
                loading: false
            }   

        default:
            return state;      
    }
}














