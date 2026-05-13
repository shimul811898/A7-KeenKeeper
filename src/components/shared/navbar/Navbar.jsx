import React from "react";
import { CiTimer } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"} className={({ isActive }) => `flex items-center gap-2 font-bold px-6 py-2 rounded text-[#64748B]  ${isActive ? "bg-[#244D3F] text-white px-3 py-1 text-center rounded" : ""}`}> <IoHomeOutline /><span> Home</span></NavLink>
      </li>
      <li>
        <NavLink to={"/keeper"} className={({ isActive }) => `font-bold px-3 flex items-center gap-1 py-2 text-[#64748B]  ${isActive ? "bg-[#244D3F] text-white px-3 py-1 rounded" : ""}`}> <CiTimer /> <span>TimeLine</span></NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"} className={({ isActive }) => `font-bold flex items-center gap-1 px-3 py-2 text-[#64748B]  ${isActive ? "bg-[#244D3F] text-white px-3 py-1 rounded" : ""}`}><TfiStatsUp /> <span>Stats</span> Stats</NavLink>
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