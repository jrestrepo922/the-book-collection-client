import React from 'react'
import { Link } from 'react-router-dom'

const Genre = (props) => {
    // debugger
    return (
        <div>
           <Link
           to={`/genres/${props.genre.id}/books`}>
           <button
           id = {props.genre.id}
           >{props.genre.genre_name}</button>
           </Link> 
        </div>
    )
}

export default Genre