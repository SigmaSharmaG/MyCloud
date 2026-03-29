import React, { useRef } from "react";
import { FaSyncAlt, FaFileUpload, FaFolderPlus } from 'react-icons/fa';
import axios from "axios";
function FolderHeader({ folderName, searchQuery, setSearchQuery,setActiveSearch, onRefresh, onUpload, onAddFolder, previous }) {
  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click(); // open file picker
  };

  const searchHandle = () => {

  }



  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white rounded-2xl p-4">

      {/* Folder Name */}
      <div className="flex items-center gap-3">
        {/* <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
        </div> */}
        <h2 className="text-xl font-semibold text-gray-800 ml-4" onClick={folderName != "My Vault" ? previous : 0}>
          {folderName || "My Vault"}
        </h2>
      </div>

      {/* Right Section (Search + Refresh) */}
      <div className="flex items-center gap-3 w-full md:w-auto flex-row-reverse mr-5">

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search files"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Searching",searchQuery)

              setActiveSearch(searchQuery); // 🔥 trigger search
            }
          }}
          className="flex-1 md:w-74 px-4 py-1 border border-gray-300 rounded-md focus:outline-none items-center"
        />

        {/* Refresh Button */}
        <button
          onClick={onRefresh}
          className="p-2 bg-green-600 text-white rounded-3xl hover:bg-blue-700 transition duration-200"
          title="Refresh"
        >
          <FaSyncAlt />
        </button>
        {/* Upload Button */}


        <button
          onClick={handleUploadClick}
          className="p-2 bg-gray-400 text-white rounded-3xl hover:bg-blue-700 transition duration-200"
          title="Upload file"
        >
          <FaFileUpload />
        </button>

        {/*Hidden Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={onUpload}
          style={{ display: "none" }}
        />

        {/* Add folder Button */}
        <button
          onClick={onAddFolder}
          className="p-2 bg-gray-400 text-white rounded-3xl hover:bg-blue-700 transition duration-200"
          title="Add folder"
        >
          <FaFolderPlus />
        </button>
      </div>
    </div>
  );
}

export default FolderHeader;