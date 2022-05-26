import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Reviews/Review';
import Loading from '../Shared/Loading';

const HomeReview = () => {
    const [reviews] = useReviews();
        
    return (
        <div className='container py-20'>
            <h1 className=' text-primary text-5xl font-bold uppercase text-center'>Testimonials</h1>
            
            <div className='mt-14 grid lg:grid-cols-3 grid-cols-1 gap-6'>
            {
                reviews.length === 0 ?
                    <Loading></Loading>
                    :
                    reviews.slice(0, 10).reverse().map(r => 
                        <Review key={r._id} r={r} />)
            }
            </div>
            <div className=' text-center mt-12'>
                <Link to="/reviews" className='btn btn-primary btn-outline font-bold'>See More Reviews</Link>
            </div>
            
        </div>
    );
    
};

export default HomeReview;