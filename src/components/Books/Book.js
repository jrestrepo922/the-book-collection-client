import React from 'react'
import { Link } from 'react-router-dom'

const Book = (props) => {
    return (
        <div>
            <div className="BookColumn">
                <div className="BookCard">
                    
                    <Link
                    to={`/genres/${props.book.genre_id}/books/${props.book.id}`}>
                        <img src={`../assets/images/${props.book.image}`} width="220" height="263" alt=" Not Avaliable"/>
                    </Link>
                    <p id="bookTitle"><b>{props.book.title}</b></p>
                    <hr></hr>
                    <p id="bookAuthor">Author Name: &nbsp;  <b>{props.book.author}</b> </p>
                    <hr></hr>
                    <p id="completed" ><b>{props.completed ? "Complete" : "Incomplete"}</b> </p>
                </div>
            </div>
        </div>
    )
}

export default Book;