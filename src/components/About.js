import React from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <Image src="images/backgroundImages/aboutpagebackground.jpg" className="header-image" fluid/>
            <Container>
              <Row>
                <Col xs={12}  smOffset={2}>
                    <Image src="images/backgroundImages/person-3.jpg" className="about-profile-pic" roundedCircle/>
                </Col>
                <Col xs={12}  smOffset={2}>
                <h3>Juan Restrepo</h3>
                    <p>The Book Collection was created so I could have a single place to see all the books that I have regarding of format. I also wanted a way to keep track of the books I finish reading and the ones I did not. Finally, I created a wishist tab to allow me to add books I eventually want to  buy. </p>
                </Col>
             </Row>
            </Container>
        </div>
    )
}

export default About; 