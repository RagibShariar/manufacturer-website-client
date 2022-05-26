import React from 'react';
import useReviews from '../../hooks/useReviews';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className=' container pt-32'>
            <div className="">
                <h1 className=' text-primary text-5xl font-bold uppercase text-center'>Testimonials</h1>
            </div>
            <div className='my-28 mx-6 grid lg:grid-cols-3 grid-cols-1 gap-6'>
                {
                    reviews.length === 0 ?
                    <Loading></Loading>
                    :
                    reviews && reviews.slice(0).reverse().map(r => <Review
                        key={r._id}
                        r={r}
                    >
                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;