import { combineReducers } from 'redux'
import genresReducer from './genresReducer'
import booksReducer from './booksReducer'


const rootReducer  = combineReducers({
    genresReducer,
    booksReducer                                                                                                 
})       

export default rootReducer;