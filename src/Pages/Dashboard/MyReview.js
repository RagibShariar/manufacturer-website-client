import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const [disabled, setDisabled] = useState(true);

    const handleReviewSubmit = (e) => {
        e.preventDefault();

        const review = {
            review : e.target.review.value,
            ratings : e.target.ratings.value,

            userName: user.displayName,
            userEmail: user.email,
            userImg : user.photoURL
        }
        fetch('https://sleepy-harbor-06116.herokuapp.com/reviews', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
        
        // console.log(data);
        if(data.success){
            toast("Review added successfully.")
        }
        else{
            toast("Review added successfully.")
        }
    })
    e.target.reset(); //reset form
    }

    const handleRatingInput = (e) => {
         e.preventDefault();   


        if ( parseFloat(e.target.value) >=1 && parseFloat(e.target.value) <=5 ) {
            setDisabled(false);
            
        }
        else{
            setDisabled(true);
        }

    }
    

    return (
        <div>
            <div className='mt-16 '>

                <div className="card mx-auto lg:w-2/4 w-full  shadow-2xl p-6">
                    <form onSubmit={handleReviewSubmit}>
                        <div>
                            <textarea name='review' className="w-full  textarea textarea-accent h-40" placeholder="Add Review"></textarea>
                        </div>
                        <div className="form-control py-3" >
                            <label className="label">
                                <span className="label-text">Enter Rating Number between 1 to 5</span>
                            </label>
                            <input onChange={(e)=> handleRatingInput(e)} type="text" name='ratings' placeholder="Ratings" className="input input-accent w-24" />
                        </div>
                        <div>
                            <button disabled={disabled} className='btn btn-accent btn-wide w-full'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReview;