import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className=''>
            <div className="drawer drawer-mobile mt-16">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <h2 className='text-5xl text-purple-500'>Dashboard</h2>
                    <Outlet></Outlet>
                     {/* Page content here  */}
                    <label for="my-drawer-2" className="absolute top-20 right-8 btn btn-sm bg-white btn-outline drawer-button lg:hidden">Dashboard Menu</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
                         {/* Sidebar content here  */}
                        <li className='mb-2 '><Link to="/dashboard">My Orders</Link></li>
                        <li className='mb-2 '><Link to="/dashboard/review">Write a Review</Link></li>
                        <li className='mb-2 '><Link to="/dashboard/profile">My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;