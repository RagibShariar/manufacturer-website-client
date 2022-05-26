import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='ml-10 my-10'>
            <div className='flex p-2  w-1/2 mb-4'>
            <h1 className='w-32  text-3xl font-semibold uppercase'></h1>
            <img className='ml-10 w-40' src={user.photoURL ? user.photoURL : 'https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1202490454?k=20&m=1202490454&s=612x612&w=0&h=G-CL9QvsuJbGV7QcchGsAPS3njcJ-hheqni9MS_A9-8='} alt="" />

            </div>
            
            <div className='flex p-2  w-1/2'>
            <h1 className='w-40  text-3xl font-semibold uppercase'>Name</h1>
            <h1 className='w-10 text-3xl font-bold uppercase'>:</h1>
            <h1 className='text-3xl font-bold uppercase'>{user.displayName}</h1>
            </div>
            <div className='flex p-2  w-1/2'>
            <h1 className='w-40  text-3xl font-semibold uppercase'>Email</h1>
            <h1 className='w-10 text-3xl font-bold uppercase'>:</h1>
            <h1 className='text-3xl font-bold '>{user.email}</h1>
            </div>
            <div className='flex p-2  w-1/2'>
            <h1 className='w-40  text-3xl font-semibold uppercase'>Phone</h1>
            <h1 className='w-10 text-3xl font-bold uppercase'>:</h1>
            <h1 className='text-3xl font-bold '>{user.phoneNumber}</h1>
            </div>
            <div className='flex p-2  w-1/2'>
            <h1 className='w-40  text-3xl font-semibold uppercase'>Address</h1>
            <h1 className='w-10 text-3xl font-bold uppercase'>:</h1>
            <h1 className='text-3xl font-bold '>{user.phoneNumber}</h1>
            </div>
        </div>
    );
};

export default MyProfile;