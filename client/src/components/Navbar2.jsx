import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar2 = () => {
  const loction=useLocation();
  const isSecurityPage=location.pathname==="/Security";
  return (
    <>
    {/* Navbar */}
      <nav
  className={`flex items-center justify-between px-16 py-4 ml-3 ${
    isSecurityPage ? "relative" : "sticky top-0"
  }`}
>
      
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="bg-white text-blue-600 px-2 py-1 rounded">∑</span>
          MY CLOUD
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-20 text-sm ">
          <Link to="/Home" ><li className="hover:text-gray-200 cursor-pointer">Home</li></Link>
          <Link to="/Feature"> <li className="hover:text-gray-200 cursor-pointer">Features</li></Link>
          <Link to="/Price"><li className="hover:text-gray-200 cursor-pointer">Pricing</li></Link>
         <Link to="/Security"> <li className="hover:text-gray-200 cursor-pointer">Security</li></Link>
          <Link to="/Contact"><li className="hover:text-gray-200 cursor-pointer">Contact</li></Link>
        </ul>

        {/* Menu Icon */}
        <div className="mr-1">
        <Link  to="/login"className="border border-white px-4 mx-5 py-2 rounded hover:bg-white hover:text-blue-600 transition">
          Login
        </Link>
        <Link to="/signup" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition">
          SignUp
        </Link>
        </div>
      </nav>
      </>
  )
}

export default Navbar2