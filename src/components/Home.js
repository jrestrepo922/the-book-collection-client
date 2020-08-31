import React from 'react'
import { Image, Container } from 'react-bootstrap'
import './Home.css'



const Home = () => {
    return (
        <div className="image-container">
            <Image src="images/backgroundImages/homebackground.jpg" className="home-image" />
            <Container>
                <h1>Welcome to The Book Collection App! </h1> <br></br>
                <h4>
                    The App allows you to add books to your collection filter by genres. 
                </h4>
                <h4>
                    You can also add books you want to buy To  Wishlist.
                </h4>
                <h4>
                    To get started you can click on genres or Wishlist. 
                </h4>
            </Container>   
            
        </div>
    )
}


export default Home;