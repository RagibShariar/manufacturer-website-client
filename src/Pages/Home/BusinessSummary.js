import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faTruck, faShoppingCart, faHandshake, faEarth, faUsers } from '@fortawesome/free-solid-svg-icons';

import earth from '../../assets/images/icons/earth-asia-solid.svg';
import handshake from '../../assets/images/icons/handshake-solid.svg';
import delivery from '../../assets/images/icons/truck-solid.svg';
import comment from '../../assets/images/icons/comments-solid.svg';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const BusinessSummary = () => {
    return (
        <div className='card container pb-16'>
            <h1 className='mt-6 mb-24 text-center text-5xl font-bold uppercase text-dark '>Millions Business Trust Us</h1>

            <div className='lg:flex '>
                {/* 1 */}
            <div class="card card-compact w-96 text-center  mb-6">
            <div className='text-9xl text-primary'>
            <FontAwesomeIcon icon={faEarth} />
            </div>
                <div class="card-body">
                    <h2 class="mt-6 mb-2 text-8xl font-bold text-secondary">3</h2>
                    <p className='text-xl text-primary uppercase'>Million Sold</p>
                </div>
            </div>
            <div class="card card-compact w-96 text-center   mb-6 ">
            <div className='text-9xl text-primary'>
            <FontAwesomeIcon icon={faHandshake} />
            </div>
            {/* 2 */}
                <div class="card-body">
                    <h2 class="mt-6 mb-2 text-8xl font-bold text-secondary">45</h2>
                    <p className='text-xl text-primary uppercase '>Partners</p>
                </div>
            </div>
            <div class="card card-compact w-96 text-center   mb-6 ">
            <div className='text-9xl text-primary'>
            <FontAwesomeIcon icon={faUsers} />
            </div>
            {/* 3 */}
                <div class="card-body">
                    <h2 class="mt-6 mb-2 text-8xl font-bold text-secondary">500+</h2>
                    <p className='text-xl text-primary uppercase'>Regular Client</p>
                </div>
            </div>
            <div class="card card-compact w-96 text-center   mb-6 ">
            <div className='text-9xl text-primary'>
            <FontAwesomeIcon icon={faComments} />
            </div>
            {/* 4 */}
                <div class="card-body">
                    <h2 class="mt-6 mb-2 text-8xl font-bold text-secondary">900+</h2>
                    <p className='text-xl text-primary uppercase'>Reviews</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BusinessSummary;