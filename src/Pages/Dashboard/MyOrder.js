import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { email } = user;


    useEffect(() => {
        if (user) {
            fetch(`https://sleepy-harbor-06116.herokuapp.com/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })  

            .then(res => {
                // console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setOrders(data);
            });

                // .then(res => res.json())
                // .then(data => setOrders(data));
        }
    }, [user])


    // Delete item
    const cancelOrder = (id) => {
        const confirm = window.confirm('Are you sure to cancel?');
        //removing item from database
        if (confirm) {
            fetch(`https://sleepy-harbor-06116.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        //filter other products and setting up a new state
                        const remaining = orders.filter(user => user._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div className='px-2'>
            <h3 className='my-4 text-2xl font-bold text-fuchsia-700'>Hello Mr. {user.displayName}</h3>
            <h1 className=''>Total pending orders : {orders.length}</h1>
            <div className="overflow-x-auto  mt-10 ">
                <table className="table  w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <th><img src={order.productImg} alt="" /></th>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.userEmail}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.address}</td>
                                    <td className='flex items-center justify-center'>
                                        <button className='mx-1 btn btn-sm bg-green-800'>Payment</button>

                                        <button onClick={() => { cancelOrder(order._id) }} className='mx-1 btn btn-sm btn-primary'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        {/* <!-- row 1 --> */}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;