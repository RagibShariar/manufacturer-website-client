import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Products/Product';
import Loading from '../Shared/Loading';

const HomeProduct = () => {
    const [product] = useProducts();
                
    return (
        <div className='container'>
            <h1 className='mt-14 text-primary text-5xl font-bold uppercase text-center'>Our Products</h1>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                product.length === 0 ?
                    <Loading></Loading>
                    :
                    product.slice(0, 6).map(product => 
                        <Product key={product._id} product={product} />)
            }
            </div>
            <div className=' text-center mb-10'>
                <Link to="/products" className='btn btn-primary btn-outline font-bold'>More Products</Link>
            </div>
        </div>
    );
};

export default HomeProduct;