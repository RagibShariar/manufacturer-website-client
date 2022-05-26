import React from 'react';
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className=''>
            <div className="relative " >
            <img src={banner} alt="Banner " />
                {/* <div className="hero-overlay bg-opacity-0"></div> */}
                <div className=" absolute top-6 lg:top-[250px] left-0 text-neutral-content ">
                    <div className="lg:w-2/3 w-2/3 container" >
                        <h1 className="mb-8 mt-16 leading-7  text-2xl lg:text-5xl font-bold">A NEW ERA IN NOTEBOOK KEYBOARDS!</h1>
                        <button className="btn btn-primary rounded-none">Buy Cherry mx ultra low profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;