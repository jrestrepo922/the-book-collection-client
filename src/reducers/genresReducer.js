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
            debugger
            return{
                ...state,
                genres: [...state.genres, action.payload],
                loading: false
            }
        default:
            return state;      
    }
}














