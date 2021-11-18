import React from 'react';
import './Subscribe.css';
import { Col, Container, Row } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div className="subscribe-bg">
            <>
                <Container>
                    <Row>
                        <Col>
                            <div className="subscribe-info">
                                <h5 className="subscribe-haeding-one">LATEST NEWS AND DEALS DIRECTLY TO YOUR INBOX</h5>
                                <h2 className="subscribe-haeding-two">SUBSCRIBE FOR UPDATED</h2>
                            </div>
                        </Col>
                        <Col>
                            <div className="subscribe-btn">
                            <input type="email" placeholder="your@gmail.com" />
                            <button>Subscribe</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        </div>
    );
};

export default Subscribe;