import React from 'react';
import './AddProduct.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://thawing-atoll-32330.herokuapp.com/motobikeProducts', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
            console.log(res)
        })
    } 
    return (
        <div className="add-tour">
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("bikeName")} placeholder="bike name" />
                <input {...register("img")} placeholder="img url" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;