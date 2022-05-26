import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import './Purchase.css';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [quantityError, setQuantityError] = useState("");
    const [ quantity, setQuantity] = useState("");
    const [disabled, setDisabled] = useState(true);
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
        
        const minOrder = parseInt(product.minimumOrder);
        const available = parseInt(product.available);


        if ( parseInt(e.target.value) < minOrder ) {
            setQuantityError(`Minimum order quantity is ${minimumOrder}`);
            setDisabled(true);
            setQuantity(parseInt(e.target.value));
        }
        else if ( parseInt(e.target.value) > available ) {
            setQuantityError(`Sorry! Only ${available} pieces available.`);
            setDisabled(true);
            setQuantity(parseInt(e.target.value));
        }
        else{
            setQuantity(parseInt(e.target.value));
            setQuantityError("")
            setDisabled(false);
        }

    }
    const handleOrder = (event) =>{
        event.preventDefault();
        // console.log(_id, name);

        const order = { // ki ki data niye db te pathabo
            productId : _id,
            product: name,
            productImg: img,
            userEmail: user.email,
            userName: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value
        }
    fetch('http://localhost:5000/order', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        
        // console.log(data);
        if(data.success){
            toast.success("Order placed successfully. Thank you for purchasing.")
        }
        else{
            toast.error("You have already ordered this item. you can update quantity from 'My Orders'")
        }
    })
    event.target.reset(); //reset form
    }

    return (
        <div className='pt-20 pb-16  bg-base-200'>
            <div className="container">

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center  lg:text-left shadow-lg">
                            <img src={img} alt="" />
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card  w-full max-w-lg shadow-2xl bg-base-100">
                            <form  onSubmit={handleOrder } className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name='phone' placeholder='Your Phone Number' className="phone-input input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                        <span className="label-text-alt">Min Order: {minimumOrder}</span>
                                    </label>
                                    <input onChange={(e)=> handleMinOrder(e)} type="number" name='quantity' placeholder={minimumOrder} className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text-alt text-red-600">{quantityError}</span>
                                        <span className="label-text-alt">Max Order: {available}</span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    
                                    <input type="submit" value="Proceed Checkout" disabled={disabled} className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>






            </div>
           
        </div >
    );
};

export default Purchase;