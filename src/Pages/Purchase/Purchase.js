import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [quantityError, setQuantityError] = useState("");
    const [ quantity, setQuantity] = useState("");
    const { _id, name, img, type, description, price, available, minimumOrder } = product;
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:5000/products/${id}`)
            const data = await res.json()
            setProduct(data);
            // console.log(data);
        }
        fetchData();
    }, [id])

    const handleMinOrder = (e) => {
        // const {minOrder, available} = product;

        const available = parseInt(product.available);
        const minOrder = parseInt(product.minOrder);

        if (parseInt(e.target.value) < minOrder) {
            setQuantityError('quan is low');

            setQuantity(parseInt(e.target.value));
        }
        else if (parseInt(e.target.value) > available) {
            setQuantityError('Quan is too big');
            setQuantity(parseInt(e.target.value));
        }
        else{
            setQuantity(parseInt(e.target.value))
            setQuantityError("")
        }

    }

    return (
        <div className='pt-20 pb-16  bg-base-200'>
            <div className="container">

                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <div class="text-center  lg:text-left shadow-lg">
                            <img src={img} alt="" />
                            <h1 class="text-5xl font-bold">Login now!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div class="card  w-full max-w-lg shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" disabled value={user.displayName} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" disabled value={user.email} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder='Your Phone Number' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Quantity</span>
                                        <span class="label-text-alt">Min Order: {minimumOrder}</span>
                                    </label>
                                    <input onChange={(e)=> handleMinOrder(e)} type="number" placeholder={minimumOrder} class="input input-bordered" />
                                    <label class="label">
                                        <span class="label-text-alt">{quantityError} </span>
                                        <span class="label-text-alt">Max Order: {available}</span>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
           
        </div >
    );
};

export default Purchase;