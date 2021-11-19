import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import userProfile from '../../../images/user-profile.png';



const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://thawing-atoll-32330.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, []);



    return (
        <Container className="testimonial-section">
            <h1 className="testimonial-heading">Testimonial</h1>
            <Row xs={1} sm={1} md={1} lg={3} className="g-4">
                {
                    testimonials?.map(testimonial =>
                         <Col
                            key={testimonial?._id}
                        >
                            <Card>
                                <div className="user-profile">
                                    <img src={userProfile} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title>{testimonial.name}</Card.Title>
                                    <>
                                        <p>{testimonial?.description}</p>
                                        <p>Ratin: <span>{testimonial?.rating}</span>/5</p>
                                    </>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }

            </Row>
        </Container>
    );
};

export default Testimonial;