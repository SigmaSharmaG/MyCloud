import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <>
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-sm p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center !text-black opacity-100">
          Login 
        </h2>

        {/* Form */}
        <form className="mt-6 space-y-4">
          
          {/* Email */}
          <div>
            <label className="flex text-sm text-gray-500">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-purple-500 py-2"
            />
          </div>

          {/* Password */}
          <div>
            <label className="flex text-sm text-gray-500">Password</label>
            <input
              type="password"
              placeholder="password"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-purple-500 py-2"
            />
          </div>

          {/* Forgot */}
          <div className="text-right text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-500">
              Forgot password?
            </a>
          </div>

           <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Social */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 mb-3">Or Sign Up Using</p>

          <br/>

          <div className="flex justify-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
              <FaFacebookF size={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white">
              <FaTwitter size={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white">
              <FaGoogle size={14} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">Or Sign Up Using</p>
          {/* <a href={()=> navigate(<Signup/>)} className="text-sm font-semibold text-gray-700 hover:text-purple-500">
            SIGN UP
          </a> */}
          <Link
             to="/signup"
                className="text-sm font-semibold text-gray-700 hover:text-purple-500"
            >
  SIGN UP
</Link>
        </div>

      </div>
    </div>
    </>
  )
}

export default Login