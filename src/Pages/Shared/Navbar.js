import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logo.svg';

const Navbar = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

    // User sign out 
    const logout = () =>{
      signOut(auth);
    }

    const menuItems = <>
        <li><NavLink className="mx-1 hover:underline btn btn-ghost rounded-none hover:bg-zinc-900 hover:text-slate-400" to="/">Home</NavLink></li>
        <li><NavLink className="mx-1 hover:underline btn btn-ghost rounded-none hover:bg-zinc-900 hover:text-slate-400" to="/about">About</NavLink></li>
        <li><NavLink className="mx-1 hover:underline btn btn-ghost rounded-none hover:bg-zinc-900 hover:text-slate-400" to="/products">Products</NavLink></li>
        <li><NavLink className="mx-1 hover:underline btn btn-ghost rounded-none hover:bg-zinc-900 hover:text-slate-400" to="/reviews">Reviews</NavLink></li>
        <li><NavLink className="mx-1 hover:underline btn btn-ghost rounded-none hover:bg-zinc-900 hover:text-slate-400" to="/blogs">Blogs</NavLink></li>
        {
          user && <li><NavLink className="mx-1 hover:underline btn btn-ghost rounded-none hover:bg-zinc-900 hover:text-slate-400" to="/dashboard">Dashboard</NavLink></li>
        }
        <li>{user ? <button onClick={logout} className='mx-1 btn btn-ghost hover:bg-zinc-900'>Sign Out</button>
        : 
        <NavLink className="mx-1 btn border-none hover:bg-primary hover:border-primary" to="/login">Login</NavLink>}</li>
    </>
    return (
        <div className=''>
      <div className="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div className=" w-full navbar  text-slate-400 bg-secondary fixed top-0 z-20">
      
      <div className="flex-1 px-2 mx-2 ">
        <Link as={Link} to='/'>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
        {/* Hamburger icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
      </div> 
      <div className="flex-none hidden lg:block ">
        <ul className="menu menu-horizontal font-semibold uppercase">
          {/* <!-- Navbar menu content here --> */}
          {menuItems}
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
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