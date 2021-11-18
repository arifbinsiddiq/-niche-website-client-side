import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://thawing-atoll-32330.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-tour">
            <h2>Add Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="rating" />
                <input className="booking-order-btn" type="submit" value="Review" />
            </form>
        </div>
    );
};

export default Review;