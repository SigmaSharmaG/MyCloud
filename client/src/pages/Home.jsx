import React from 'react'
import { Link } from 'react-router-dom';
import { FaLock, FaShareAlt, FaComments, FaFileSignature } from "react-icons/fa";

import Navbar2 from '../components/Navbar2.jsx';
const Home = () => {
  
  return (
    <div className="bg-blue-600 flex flex-col min-h-screen text-white ">
      
      <Navbar2/>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 not-odd:">
        
        {/* Left Content */}
        <div className="max-w-xl px-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
             Store, Share & <br />
            Access Files <br />
            Anytime, Anywhere 
          </h1>

          <p className="mt-6 text-gray-200">
            Secure cloud storage for all your files. Upload, manage, and share 
            your data seamlessly across devices with end-to-end encryption
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <Link to="/login" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
              GET STARTED
            </Link>

            <button className="flex items-center gap-2">
              <span className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center">
            →
              </span>
              Watch Intro
            </button>
          </div>

        </div>
         <div className="mt-10 md:mt-0 bg-white text-black rounded-lg shadow-lg p-6 w-87.5 mr-9 ">
          
          <h3 className="font-semibold mb-4">My Files</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>📄 Resume.pdf</span>
              <span>2MB</span>
            </div>
            <div className="flex justify-between">
              <span>📸 Photos.zip</span>
              <span>120MB</span>
            </div>
            <div className="flex justify-between mb-5">
              <span>🎵 Music.mp3</span>
              <span>5MB</span>
            </div>
          </div>

          <Link  to="/login" className="w-full bg-blue-600 text-white py-2 px-4 rounded">
            + Upload New File
          </Link>
        </div>

      </div>
      

        <section className="bg-white py-20 px-6 md:px-16">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center max-w-3xl mx-auto text-black">
        MyCloud supports you and your business at every stage
      </h2>

      {/* Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">
        
        {/* Card 1 */}
        <div className="flex gap-6">
          <div className="text-blue-600 text-4xl">
            <FaLock />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              Store and protect your files
            </h3>
            <p className="mt-2 text-gray-600">
              Starting at 3 TB of storage and backup, with security features
              like file recovery, password protection, watermarking, and viewer history.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex gap-6">
          <div className="text-blue-600 text-4xl">
            <FaShareAlt />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              Share your content
            </h3>
            <p className="mt-2 text-gray-600">
              Forget email attachments. Deliver large files with confidence
              and stay informed on file activity without leaving the platform.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex gap-6">
          <div className="text-blue-600 text-4xl">
            <FaComments />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              Collaborate on your work
            </h3>
            <p className="mt-2 text-gray-600">
              Fast track collaboration and streamline feedback and approvals
              on your projects.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex gap-6">
          <div className="text-blue-600 text-4xl">
            <FaFileSignature />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">
              Manage your business
            </h3>
            <p className="mt-2 text-gray-600">
              Easily prepare, edit PDFs, send and eSign your most important
              documents — all in one place.
            </p>
          </div>
        </div>

      </div>
    </section>





    </div>
  );
}

export default Home