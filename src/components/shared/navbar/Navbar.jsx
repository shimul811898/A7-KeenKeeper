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
    <div className="navbar  max-w-7xl lg:flex sm:grid-cols-1 space-y-4 bg-base-100 shadow-sm p-6 md:px-20 py-4 grid justify-between items-center">
      <div>
        <a className="btn btn-ghost text-3xl font-bold text-[#244D3F]"><span className="text-black">Keen</span>Keeper</a>
      </div>

      <div className=" list-none grid grid-cols-3">
        {links}
      </div>
    </div>
  )

}

export default Navbar;