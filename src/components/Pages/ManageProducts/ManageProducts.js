import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://thawing-atoll-32330.herokuapp.com/motobikeProducts')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleDelete = id => {
        const confirmDelete = window.confirm('Are You Sure Delete this item?');
        if (confirmDelete) {
            const url = `https://thawing-atoll-32330.herokuapp.com/motobikeProducts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = product.filter(item => item._id !== id);
                        setProduct(remaining)
                    }

                })
        }

    }

    return (
        <div>
            <Container>
                <h1>Manage Products</h1>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            product?.map(item =>
                                <tr
                                    key={item._id}
                                >
                                    <td>{item.bikeName}</td>
                                    <td>{item.price}</td>
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

export default ManageProducts;