import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Genre.css'
import { Button, Col, Modal } from 'react-bootstrap'


const Genre = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // debugger
    return (


        <Col xs={6} sm={6} md={4} lg={3} xl={3} className='genre-column'>

           <Link
           to={`/genres/${props.genre.id}/books`}>
           <Button id = {props.genre.id} class="genre-btn" variant="primary">{props.genre.genre_name}</Button>{" "}
           </Link> 
           <Button variant="outline-secondary" onClick={handleShow}>
           X
           </Button>
           <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Genre {props.genre.genre_name} is about to be Deleted!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete the genre?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                {/* eslint-disable-next-line*/}
                <Button id={props.genre.id} variant="primary" onClick={handleClose, props.handleClick}>
                Delete
                </Button>
            </Modal.Footer>
            </Modal>
        </Col>
    )
}

export default Genre