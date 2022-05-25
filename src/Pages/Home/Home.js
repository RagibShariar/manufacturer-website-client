import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeProduct from './HomeProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <HomeProduct></HomeProduct>
        </div>
    );
};

export default Home;