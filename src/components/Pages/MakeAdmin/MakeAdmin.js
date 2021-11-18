import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://thawing-atoll-32330.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setEmail('');
                setSuccess(true);
            }
            
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} type="email" />
                <button type="submit">Make Admin</button>
            </form>
            {
                success && <Alert variant="success">
                Make Admin successfully!
              </Alert>
            }
        </div>
    );
};

export default MakeAdmin;