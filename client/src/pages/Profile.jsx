import React, { useState } from "react";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"} min-h-screen p-6`}>
      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Profile Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            Toggle Dark Mode
          </button>
        </div>

        {/* PROFILE INFO */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow flex items-center gap-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold">
            Y
          </div>
          <div>
            <h2 className="text-xl font-semibold">Yadav Ji</h2>
            <p className="text-gray-500">yadav@example.com</p>
            <button className="mt-2 text-blue-500">Edit Profile</button>
          </div>
        </div>

        {/* GRID SECTION */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* STORAGE */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Storage Usage</h3>

            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div className="bg-blue-500 h-4 rounded-full w-3/4"></div>
            </div>
            <p className="text-sm mb-4">7.5GB of 10GB used</p>

            <div className="space-y-2 text-sm">
              <p>📷 Images: 2.5 GB</p>
              <p>🎥 Videos: 3.2 GB</p>
              <p>📄 Documents: 1.8 GB</p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 rounded-2xl shadow">
            <div className="flex justify-between">
              <h3 className="font-semibold">Mastercard</h3>
              <div className="flex">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="w-6 h-6 bg-yellow-400 rounded-full -ml-3"></div>
              </div>
            </div>
            <p className="mt-6 tracking-widest">**** **** **** 1234</p>
            <div className="flex justify-between mt-4 text-sm">
              <span>YADAV JI</span>
              <span>12/28</span>
            </div>
          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-2 text-sm">
            <li>📁 Uploaded "resume.pdf" – 2 hrs ago</li>
            <li>🗑 Deleted "photo.png" – yesterday</li>
            <li>🔗 Shared "project.zip" – 3 days ago</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Security Settings</h3>

          <div className="flex justify-between items-center mb-4">
            <p>Two Factor Authentication</p>
            <button className="px-3 py-1 bg-green-500 text-white rounded">
              Enable
            </button>
          </div>

          <div>
            <h4 className="mb-2">Change Password</h4>
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-2 border rounded-lg"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* PREFERENCES */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Preferences</h3>

          <div className="flex justify-between items-center">
            <p>Dark Mode</p>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>

        {/* DANGER ZONE */}
        <div className="bg-red-100 p-6 rounded-2xl">
          <h3 className="font-semibold text-red-600 mb-2">Danger Zone</h3>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;