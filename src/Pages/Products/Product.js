import React, { useState } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Product = ({ product, setCart }) => {
    const { _id, name, type, img, price, description, available, minimumOrder } = product;
    // const [user, loading, error] = useAuthState(auth);


    
    // const handleOrder = () => {
    //     console.log("cliked ", product);
    //     // const productId = _id;
    //     const userEmail = user.email;
    //     const userName = user.displayName;

    //     const name = product.name;
    //     // const type = product.type;
    //     const img = product.img;
    //     // const price = product.price;
    //     // const available = product.available;
    //     const minimumOrder = product.minimumOrder;
    //     const newOrder = { userEmail, userName, name, img}
    
        // const order = {
        //     productId: _id,
        //     productName: name,
        //     userEmail: user.email,
        //     userName: user.displayName,
        //     // phone: event.target.phone.value,
        // }

        // fetch(`http://localhost:5000/order`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newOrder)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         // setCart(null);
        //     })
    
        // }



    return (
        <div className="card card-compact w-96 bg-base-100 shadow-lg shadow-slate-300 mb-12">
            <figure><img className='w-52' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="mt-6 font-extrabold text-xl">{name}</h2>
                <p className='text-base'>{description}</p>
                <p className='text-base'>Switch Type: <span className='font-bold'>{_id}</span></p>

                <div className='flex justify-center mb-8 mt-8'>
                    <p className=''>Minimum Order: <span className='font-bold'>{minimumOrder}</span></p>
                    <p className='text-right'>Available Qty: <span className='font-bold'> {available === "" ? <span className='text-red-600 font-bold'>Out of Stock</span> : available}</span></p>
                </div>
                <div className="card-actions items-center justify-between mb-4">
                    <h3 className='text-4xl font-bold'>$ {price}</h3>

                    {/* <label onSubmit={setCart(product)} disabled={available === ""} for="purchase-modal" class="btn modal-button btn btn-primary font-bold text-white">Purchase Now</label> */}
                    <Link  to={`/purchase/${_id}`}  className="btn btn-primary font-bold text-white">go purchase page </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;