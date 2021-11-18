import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import { Carousel } from 'react-bootstrap';
import userProfile from '../../../images/user-profile.png';

const Testimonial = () => {
    const [ testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://thawing-atoll-32330.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="testimonial-bg">
            <Carousel>
                <h2 className="testimonial">Testimonial</h2>
                {
                    testimonials.map(testimonial => <Carousel.Item
                        key={testimonial._id}
                    >
                        <img className="user-profile" src={userProfile} alt="" />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.description}</p>
                        <p>{testimonial.rating}</p>
                    </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default Testimonial;