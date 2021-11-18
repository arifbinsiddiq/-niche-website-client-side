import React, { useEffect, useState } from 'react';
import './AllServices.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [ services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://thawing-atoll-32330.herokuapp.com/motobikeProducts')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <Container>
            <h1 className="all-top-motobike-heading">Top MotoBike 2021</h1>
            <Row xs={1} sm={1} md={1} lg={3} className="g-4">
                {
                    services?.map(service =>
                         <Col
                            key={service?._id}
                        >
                            <Card>
                                <div className="motobike-img">
                                    <img src={service?.img} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="bikename-title">{service.bikeName}</Card.Title>
                                    <>
                                        <p>{service?.description.slice(0,120)}</p>
                                        <p className="bike-price">Price: <span>$</span>{service.price}</p>
                                        <Link to={`/service/${service._id}`}><button className="details-btn">Details Now</button></Link>
                                        
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

export default AllServices;