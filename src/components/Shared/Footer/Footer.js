import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <Row>
                    <Col>
                        <div className="contact-info">
                            <h3>Contact</h3>
                            <p>Address:</p>
                            <p>A/1, Road-3, ABS MOTOBIKE, <br /> Amborkhana, Sylhet</p>
                            <p>email: absmotobike@gmail.com</p>
                            <p>phone: +880 1711 112 233</p>
                        </div>
                    </Col>
                    <Col>
                        <h3 className="social-heading">Social Links</h3>
                        <div className="social-icon">
                                <a href="https://www.facebook.com/arif.siddiq.54">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/ArifurR99673235">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/arifbinsiddiq/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/arifur-rahman-7932b91b2/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/Arif-Bin-Siddiq">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                    </Col>
                </Row>
                <p className="copyright">Copyright © Arif Bin Siddiq</p>
            </Container>
        </div>
    );
};

export default Footer;