import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);

    return (
        <div className=''>
            <div className="drawer drawer-mobile mt-16 h-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <h2 className='text-5xl text-purple-500'>Dashboard</h2> */}
                    <Outlet></Outlet>
                     {/* Page content here  */}
                    <label htmlFor="my-drawer-2" className="absolute top-24 right-8 btn btn-sm bg-white btn-outline drawer-button lg:hidden">Dashboard Menu</label>

                </div>
                <div className="drawer-side h-screen">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-64 bg-gray-100 text-base-content">
                         {/* Sidebar content here  */}
                        { !admin && <li className='mb-2 '><Link to="/dashboard">My Orders</Link></li>}
                        { !admin && <li className='mb-2 '><Link to="/dashboard/review">Write a Review</Link></li>}
                        <li className='mb-2 '><Link to="/dashboard/profile">My Profile</Link></li>
                        { admin && <li className='mb-2 '><Link to="/dashboard/manage-order">Manage All Orders</Link></li>}
                        { admin && <li className='mb-2 '><Link to="/dashboard/add-product">Add Product</Link></li>}
                        { admin && <li className='mb-2 '><Link to="/dashboard/manage-product">Update Product</Link></li>}
                        { admin && <li className='mb-2 '><Link to="/dashboard/users">All Users</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;