import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Loading from '../Shared/Loading';
import Product from './Product';
import PurchaseModal from './PurchaseModal';

const Products = () => {
    const [products, setProducts] = useProducts();
    // const [cart, setCart] = useProducts();

    // const [cartItems, setCartItems] = useState([]);
    // const [products, setProducts] = useState([]);

    // // data load
    // useEffect(() => {
    //     fetch('switchData.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, [])

    

    return (
        <div className=' container pt-28'> 
        <div className="">
                <h1 className=' text-primary text-5xl font-bold uppercase text-center'>Purchase Switches</h1>
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                products.length === 0 ?
                <Loading></Loading>
                :
                 products.map( product =>  <Product
                    key={product._id}
                    product={product}
                    // cart = {cart}
                    // setCart = {setCart}
                 
                    >
                </Product>)    
            }
            </div>
        </div>
    );
};

export default Products;