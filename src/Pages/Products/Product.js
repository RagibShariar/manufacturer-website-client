import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const {name, type, img, price, description, available, minimumOrder} = product ;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-lg shadow-slate-300 mb-12">
            <figure><img className='w-52' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="mt-6 font-extrabold text-xl">{name}</h2>
                <p className='text-base'>{description}</p>
                <p className='text-base'>Switch Type: <span className='font-bold'>{type}</span></p>

                <div className='flex justify-center mb-8 mt-8'>
                    <p className=''>Minimum Order: <span className='font-bold'>{minimumOrder}</span></p>
                    <p className='text-right'>Available Qty: <span className='font-bold'> {available==="" ? <span className='text-red-600 font-bold'>Out of Stock</span> : available}</span></p>
                </div>
                <div className="card-actions items-center justify-between mb-4">
                    <h3 className='text-4xl font-bold'>$ {price}</h3>
                    <NavLink to="/cart" disabled={available===""} className="btn btn-primary font-bold text-white">place order</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;