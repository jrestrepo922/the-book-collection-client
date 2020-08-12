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
            return{
                ...state,
                genres: [...state.genres, action.payload],
                loading: false
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














