import React from 'react'
import { Link } from 'react-router-dom'

const BookShowComponent = (props) => {
    return (
        <div>
            <div className="BookComponentColumn">
                <div className="BookComponentCard">
                    <img src={`/images/${props.book.image}.jpg`} width="220" height="263" alt=" Not Avaliable"/>
                    <p id="bookTitle"><b>{props.book.title}</b></p>
                    <hr></hr>
                    <p id="bookDescription">Description: &nbsp;  {props.book.description}</p>
                    <hr></hr>
                    <p id="bookAuthor">Author Name: &nbsp;  <b>{props.book.author}</b> </p>
                    <hr></hr>
                    <p id="bookFormat">Book Format: &nbsp;  <b>{props.book.format}</b> </p>
                    <hr></hr>
                    <p id="completed" ><b>{props.book.completed ? "Completed" : "Incompleted"}</b> </p>
                    <Link
                    to={`/genres/${props.book.genre_id}/books`}>
                    <button  id={`${props.book.genre_id} ${props.book.id}`} onClick={props.handleClick}>Delete Book</button>
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default BookShowComponent;