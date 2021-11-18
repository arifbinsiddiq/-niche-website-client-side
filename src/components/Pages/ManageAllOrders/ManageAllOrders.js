import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://thawing-atoll-32330.herokuapp.com/bookingOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    const handleDelete = id => {
        const confirmDelete = window.confirm('Are You Sure delete this item?');
        if (confirmDelete) {
            const url = `https://thawing-atoll-32330.herokuapp.com/bookingOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = allOrders.filter(item => item._id !== id);
                        setAllOrders(remaining)
                    }

                })
        }

    }


    return (
        <div>
            <Container>
                <h1>Manage All Orders</h1>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Address</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            allOrders?.map(item =>
                                <tr
                                    key={item._id}
                                >
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
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

export default ManageAllOrders;