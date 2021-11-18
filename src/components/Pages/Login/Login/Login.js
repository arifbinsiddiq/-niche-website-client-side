import React, { useState } from 'react';
import './Login.css';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        // console.log(loginData)
        e.preventDefault();
    }
    // const [loginData, setLoginData] = useState({});

    // const {user, loginUser, isLoading, authError} = useAuth();

    // const location = useLocation();
    // const history = useHistory();

    // const handleOnChange = e =>{
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = {...loginData};
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);
    // }

    // const handleLoginSubmit = e =>{
    //     loginUser(loginData.email, loginData.password, location, history);
    //     e.preventDefault();
    // }


    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" onChange={handleOnChange} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" type="password" onChange={handleOnChange} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary mb-4" type="Login">
                        Login
                    </Button>
                </Form>
                {
                    isLoading && <Spinner animation="border" />
                }
                {
                    user?.email && <Alert variant="success">
                    Login successfully!
                  </Alert>
                }
                {
                    authError && <Alert variant="danger">{authError}
                  </Alert>
                }
                <p className="new-user">are you new user? <Link to="/register">Create a New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;