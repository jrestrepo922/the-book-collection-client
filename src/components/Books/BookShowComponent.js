import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'

import './BookShowComponent.css'

const BookShowComponent = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='book-component-container'>
            <div className="BookComponentColumn">
                <div className="BookComponentCard">
                    <img src={`/images/${props.book.image}.jpg`} width="220" height="263" alt=" Not Avaliable"/>
                    <h4 id="bookTitle"><b>{props.book.title}</b></h4>
                    <hr></hr>
                    <p id="bookDescription">Description: &nbsp;  {props.book.description}</p>
                    <hr></hr>
                    <p id="bookAuthor">Author Name: &nbsp;  <b>{props.book.author}</b> </p>
                    <hr></hr>
                    <p id="bookFormat">Book Format: &nbsp;  <b>{props.book.format}</b> </p>
                    <hr></hr>
                    <p id="completed" >Book Status: &nbsp; <b>{props.book.completed ? "Finish" : "Unfinish"}</b> </p>
                    <hr></hr>
                    <div className='show-book-buttons'>
                        <Link
                        to={`/genres/${props.book.genre_id}/books/${props.book.id}/edit`}>
                        <Button  data-genre_id={props.book.genre_id}  data-id={props.book.id}  >Edit Book</Button>
                        </Link> &nbsp; &nbsp; &nbsp;
                    
                    

                        <Button  onClick={handleShow}>Delete Book</Button>
                        
                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{props.book.title} is about to be Deleted!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete the genre?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                            
                            <Link
                                to={props.book.wishlist_item ? '/wishlist/books' : `/genres/${props.book.genre_id}/books`}>
                                {/* eslint-disable-next-line*/}
                                <Button data-genre_id={props.book.genre_id} data-id={props.book.id} variant="primary" onClick={handleClose, props.handleClick}>
                                Delete
                                </Button>
                            </Link>
                        </Modal.Footer>
                        </Modal>
                    </div>
                    

                </div>
            </div> 
        </div>
    )
}

export default BookShowComponent;