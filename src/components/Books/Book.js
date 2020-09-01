import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './Book.css'

const Book = (props) => {
    return (
        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
          <div className="card-books">
            <div>
                <Link to={`/genres/${props.book.genre_id}/books/${props.book.id}`}>
                    <Card.Img variant="top" src={`/images/${props.book.image}.jpg`} width="220" height="263" alt=" Not Avaliable" className="books-index-image"/>
                </Link>
            </div>
            <Card.Body>
                <Card.Title><b>{props.book.title}</b></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem></ListGroupItem>
                <ListGroupItem>Author Name: &nbsp;  <b>{props.book.author}</b></ListGroupItem>
                <ListGroupItem>Book Status: &nbsp; <b>{props.book.completed ? "Finish" : "Unfinish"}</b></ListGroupItem>
            </ListGroup>
          </div>   
        </Col>
    )
}

export default Book;