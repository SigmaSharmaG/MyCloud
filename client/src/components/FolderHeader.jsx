import React from "react";
import { FaSyncAlt } from 'react-icons/fa';
function FolderHeader({ folderName, searchQuery, setSearchQuery,onRefresh }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white rounded-2xl p-4">
      
      {/* Folder Name */}
      <div className="flex items-center gap-3">
        {/* <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
        </div> */}
        <h2 className="text-xl font-semibold text-gray-800 ml-4">
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
      </div>
    </div>
  );
}

export default FolderHeader;