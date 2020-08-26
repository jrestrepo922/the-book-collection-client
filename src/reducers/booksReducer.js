export default (state = { books: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_BOOKS":
            return {
                ...state,
                loading: true
            }
        case "BOOKS_LOADED":
            return {
                ...state,
                books: action.payload,
                loading: false
            }

        case "ADDING_BOOK":
            return{
                ...state,
                loading: true
            }

        case 'BOOK_ADDED':
            return{
                ...state,
                books: [...state.books, action.payload],
                loading: false
            }

        case "DELETING_BOOK":
            return {
                ...state, 
                loading: true 
            }

        case "BOOK_DELETED":
            return {
                ...state,
                books: [...state.books.filter(book => book.id !== action.payload)],
                loading: false
            }  

        case "EDITTING_BOOK":
            return{
                ...state,
                loading: true
            }

        case 'BOOK_EDIT':
            return{
                ...state,
                books: [...state.books, action.payload],
                loading: false
            }


        default:
            return state;      
    }
}
