import React, { useState } from 'react';
import './Register.css';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    

    const {user, isLoading, authError, registerUser} = useAuth();
    

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegisterSubmit = e =>{
        registerUser(loginData.name, loginData.email, loginData.password, history);
        
        e.preventDefault();
    }
    
    return (
        <div className="register-form">
            <div>
                <h2>Please Registration</h2>
                {!isLoading && <Form onSubmit={handleRegisterSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control 
                        name="name"
                        type="name" 
                        onChange={handleOnChange} 
                        placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                        name="email"
                        type="email" 
                        onChange={handleOnChange} 
                        placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control 
                        name="password"
                        type="password" 
                        onChange={handleOnChange} placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary mb-4" type="Submit">
                        Register
                    </Button>
                </Form>}
                {
                    isLoading && <Spinner animation="border" />
                }
                {
                    user?.email && <Alert variant="success">
                    Congrats! Register Successfully
                  </Alert>
                }
                {
                    authError && <Alert variant="danger">{authError}
                  </Alert>
                }
                <p className="already-register">already register? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;