import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Products/Product';
import Loading from '../Shared/Loading';

const HomeProduct = () => {
    const [product] = useProducts();
                
    return (
        <div className='container'>
            
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                product.length === 0 ?
                    <Loading></Loading>
                    :
                    product.slice(0, 6).map(product => 
                        <Product key={product._id} product={product} />)
            }
            </div>
            
        </div>
    );
};

export default HomeProduct;