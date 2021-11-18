import React, { useEffect, useState } from 'react';
import './Home.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeBanner from '../HomeBanner/HomeBanner';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    const [ services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://thawing-atoll-32330.herokuapp.com/motobikeProducts')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const sliceServices = services.slice(0,6);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Container>
            <h2 className="top-motobike-heading">Top MotoBike 2021</h2>
            <Row xs={1} sm={1} md={1} lg={3} className="g-4">
            {
                    sliceServices?.map(service =>
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
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;