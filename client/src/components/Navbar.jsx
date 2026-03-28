import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className=" text-black bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 font-bold text-xl">
            MyCloud
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/Vault" className="hover:text-blue-200">My Vault</Link>
            <Link to="/shared-with-me" className="hover:text-blue-200">Shared With Me</Link>
            <Link to="/Profile" className="hover:text-blue-200">Profile</Link>
            <button className="hover:text-blue-200" onClick={handleLogout}>Logout</button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-2 pt-2 pb-3 space-y-1">
          <Link to="/my-vault" className="block px-3 py-2 rounded hover:bg-blue-400">My Vault</Link>
          <Link to="/shared-with-me" className="block px-3 py-2 rounded hover:bg-blue-400">Shared With Me</Link>
          <Link to="/profile" className="block px-3 py-2 rounded hover:bg-blue-400">Profile</Link>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-blue-400">Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;