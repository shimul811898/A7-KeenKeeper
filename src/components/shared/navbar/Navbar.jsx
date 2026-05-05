import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const links = (
       <>
      <li>
       <NavLink to={"/"} className={({ isActive }) => `font-bold px-3 py-2 ${isActive ? "bg-[#244D3F] text-white px-3 py-1 rounded" : ""}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/keeper"} className={({ isActive }) => `font-bold px-3 py-2 ${isActive ? "bg-[#244D3F] text-white px-3 py-1 rounded" : ""}`}>TimeLine</NavLink>
      </li>
      <li>
        <NavLink to={"/page-to-read"} className={({ isActive }) => `font-bold px-3 py-2 ${isActive ? "bg-[#244D3F] text-white px-3 py-1 rounded" : ""}`}>Stats</NavLink>
      </li>
    </>
    )
    return (
        <div className="navbar bg-base-100 shadow-sm px-20 py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
    
    </div>
    <a className="btn btn-ghost text-3xl font-bold text-[#244D3F]"><span className="text-black">Keen</span>Keeper</a>
  </div>
 
  <div className="navbar-end list-none gap-x-10">

    {links}
  </div>
</div>
    )

}

export default Navbar;