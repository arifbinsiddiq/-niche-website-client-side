import React, { useEffect, useState } from 'react';
import './SingleService.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';


const SingleService = () => {

    const { user } = useAuth();

    let { serviceKey } = useParams();

    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() => {
        fetch(`https://thawing-atoll-32330.herokuapp.com/motobikeProducts/${serviceKey}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [serviceKey]);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://thawing-atoll-32330.herokuapp.com/bookingOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Order successfully');
                    reset();
                }
            })
    }


    return (
        <Container className="bike-details-section">
            <Row sm={1} md={2} lg={2}>
                <Col>
                    <div className="bike-details">
                        <h2>Tour Order Details</h2>
                        <Card>
                            <div className="bike-details-img">
                                <img src={serviceDetails?.img} alt="" />
                            </div>
                            <Card.Body>
                                <Card.Title>{serviceDetails?.bikeName}</Card.Title>
                                <>
                                    <p>{serviceDetails?.description}</p>
                                    <p>
                                        Price <span>$</span>
                                        {serviceDetails?.price}
                                    </p>
                                </>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="bike-booking-form">
                        <h2>Please! Booking Now</h2>
                        {user.email && serviceDetails.bikeName ? <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email")} />
                            <input defaultValue={serviceDetails.bikeName} {...register("bikeName")} placeholder="Bike Name" />
                            <input {...register("address")} placeholder="address" />
                            <input type="number" {...register("contact")} placeholder="phone" />
                            <input className="booking-order-btn" type="submit" value="Booking Now" />
                        </form>
                        :
                        ''
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleService;