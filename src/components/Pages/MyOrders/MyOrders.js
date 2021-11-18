import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://thawing-atoll-32330.herokuapp.com/bookingOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email]);

    const handleDelete = id => {
        const confirmDelete = window.confirm('Are You Sure?');
        if (confirmDelete) {
            const url = `https://thawing-atoll-32330.herokuapp.com/bookingOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = myOrders.filter(item => item._id !== id);
                        setMyOrders(remaining)
                    }

                })
        }

    }

    return (
        <div>
            <Container>
                <h1>My Order {myOrders.length}</h1>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Address</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            myOrders?.map(item =>
                                <tr
                                    key={item._id}
                                >
                                    <td>{item.bikeName}</td>
                                    <td>{item.address}</td>
                                    <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>

                </Table>
            </Container>
        </div>
    );
};

export default MyOrders;