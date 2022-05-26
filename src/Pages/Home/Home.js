import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeProduct from './HomeProduct';
import HomeReview from './HomeReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <HomeProduct></HomeProduct>
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;