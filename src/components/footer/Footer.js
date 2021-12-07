import React, { Fragment } from "react";
import { Container } from "react-bootstrap";


const Footer = () => {

    const date = new Date()
    return(
        <section id = "footer">
            <Container>
                <div className = "footer-content">
                </div>
            </Container>
            <div className = "license">
                <p className = "license-text">{date.getFullYear()} Mattia Malacarne</p> 
            </div>
        </section>
        
    )
}

export default Footer