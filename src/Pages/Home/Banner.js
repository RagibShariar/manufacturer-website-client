import React from 'react';
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className=''>
            <div class="relative " >
            <img src={banner} alt="Banner" />
                {/* <div class="hero-overlay bg-opacity-0"></div> */}
                <div class=" absolute top-6 lg:top-[250px] left-0 text-neutral-content">
                    <div class="lg:w-2/3 container" >
                        <h1 class="mb-8 leading-7 text-3xl lg:text-5xl font-bold">A NEW ERA IN NOTEBOOK KEYBOARDS!</h1>
                        <button class="btn btn-primary rounded-none">Buy Cherry mx ultra low profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;