import React from 'react';

const Review = ({r}) => {
    const { _id, review, ratings, userName, userEmail, userImg} = r;


    return (
        <div className=''>
            
            <div className="px-5  mx-auto shadow-xl flex items-center  rounded-2xl">
                <div className="avatar w-14 h-14 ">
                    <div className=" avatar rounded-full">
                        <img src={userImg ? userImg
                        :
                        'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'    
                    } alt="" />
                    </div>
                </div>
                <div className="ml-6 py-7">
                    <h2 className="text-xl font-semibold uppercase">
                        {userName}
                    </h2>
                    <p className='my-2 text-xs'>Rating: <span className='text-sm font-bold'>{ratings}</span></p>
                    <p className=''>{review}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Review;