import React from 'react'

const BookShowComponent = (props) => {
    return (
        <div>
            <div className="BookComponentColumn">
                <div className="BookComponentCard">
                    <img src={`../assets/images/${props.book.image}`} width="220" height="263" alt=" Not Avaliable"/>
                    <p id="bookTitle"><b>{props.book.title}</b></p>
                    <hr></hr>
                    <p id="bookDescription">Description: &nbsp;  {props.book.description}</p>
                    <hr></hr>
                    <p id="bookAuthor">Author Name: &nbsp;  <b>{props.book.author}</b> </p>
                    <hr></hr>
                    <p id="bookFormat">Book Format: &nbsp;  <b>{props.book.format}</b> </p>
                    <hr></hr>
                    <p id="completed" ><b>{props.completed ? "Complete" : "Incomplete"}</b> </p>
                </div>
            </div> 
        </div>
    )
}

export default BookShowComponent;