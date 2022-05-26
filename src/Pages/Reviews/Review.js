import React from 'react';

const Review = ({r}) => {
    const { _id, review, ratings, userName, userEmail, userImg} = r;


    return (
        <div className=''>
            <div className="">
            <div class="px-5  mx-auto shadow-xl flex items-center  rounded-2xl">
                <div class="avatar w-14 h-14 ">
                    <div class=" avatar rounded-full">
                        <img src={userImg? userImg
                        :
                        // 'https://t4.ftcdn.net/jpg/04/64/96/05/360_F_464960594_SdXrzipOI6690chlTdyWuLlad99nqxwl.jpg'
                        'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'    
                    } alt="" />
                    </div>
                </div>
                <div class="ml-6 py-7">
                    <h2 class="text-xl font-semibold">
                        {userName}
                    </h2>
                    <p className='my-2 text-xs'>Rating: <span className='text-sm'>{ratings}</span></p>
                    <p className=''>{review}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Review;