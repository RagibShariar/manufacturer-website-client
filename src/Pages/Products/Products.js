import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProducts();
    // const [products, setProducts] = useState([]);

    // // data load
    // useEffect(() => {
    //     fetch('switchData.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, [])

    return (
        <div className=' container'> 
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                products.length>0 && products.map( product => <Product
                    key={product._id}
                    product={product}
                    >
                </Product>)
            }
            </div>
        </div>
    );
};

export default Products;