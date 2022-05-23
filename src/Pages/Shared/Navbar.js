import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

const Navbar = ({children}) => {
    const menuItems = <>
        <li><NavLink className="mx-1 hover:underline " to="/">Home</NavLink></li>
        <li><NavLink className="mx-1 hover:underline" to="/about">About</NavLink></li>
        <li><NavLink className="mx-1 hover:underline" to="/products">Products</NavLink></li>
        <li><NavLink className="mx-1 hover:underline " to="/reviews">Reviews</NavLink></li>
        <li><NavLink className="mx-1 hover:underline " to="/blogs">Blogs</NavLink></li>
        <li><NavLink className="mx-1 btn btn-outline hover:bg-primary hover:border-primary" to="/login">Login</NavLink></li>
    </>
    return (
        <div className=''>
      <div className="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle " /> 
  <div className="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div className="w-full navbar  text-slate-400 bg-secondary fixed top-0 z-20">
      
      <div className="flex-1 px-2 mx-2 ">
        <Link as={Link} to='/'>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none lg:hidden">
        <label for="my-drawer-3" className="btn btn-square btn-ghost">
        {/* Hamburger icon */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
      </div> 
      <div className="flex-none hidden lg:block ">
        <ul className="menu menu-horizontal font-bold ">
          {/* <!-- Navbar menu content here --> */}
          {menuItems}
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    {children}
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-4/5 bg-primary font-bold">
      {/* <!-- Sidebar content here --> */}
      {menuItems}
    </ul>
    
  </div>
</div>
    </div>
    );
};

export default Navbar;