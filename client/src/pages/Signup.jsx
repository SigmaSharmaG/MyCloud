import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Login from './Login'
import { toast } from "react-toastify";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    setFormData(
      {
        ...formData,
        [event.target.name]: event.target.value,
      }
    )
  }


  const handleSignUp = async (event) => {
    event.preventDefault();

    // Call API
    try {
      const res = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data)
      if (res.ok) {
        // alert("Signup successful");
        toast.success("Signup successful");
        setFormData({
          name: "",
          email: "",
          password: "",
        })
      } else {
        // alert(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // alert("Something went wrong ");
      toast.error("Something went wrong")
    }
  };



  return (

    <div className="min-h-screen  flex items-center justify-center bg-gray-100">

      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-sm p-8">

        {/* Header */}
        <p className="text-sm text-gray-400 text-center">
          Please enter your details
        </p>

        <h2 className="text-2xl font-bold text-center text-gray-800! mt-2">
          Welcome back
        </h2>


        <form className="mt-4" onSubmit={handleSignUp}>

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email address"
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            value={formData.password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mt-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember for 30 days
            </label>

            <a href="#" className="text-blue-500 hover:underline">
              Forgot password
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            // onClick={handleSignIn}
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-400">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {/* Don’t have an account?{" "} */}
          <Link to='/login' className="text-blue-500 hover:underline">
            Login-IN
          </Link>

        </p>

      </div>
    </div>
  )
}

export default Signup