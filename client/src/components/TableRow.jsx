import React, { useState } from 'react';
import { FaFolder, FaFileAlt, FaEllipsisV } from 'react-icons/fa';

const TableRow = ({ id,path, type, name, owner, size, date, openFolder,activeMenu,
  handleMoreOptions}) => {
  const [displayOptions, setDisplayOptions] = useState(false);
  // const handleMoreOptions = () => {
  //   setDisplayOptions(!displayOptions);
  // }

  

  return (
    <div className="flex items-center px-10 py-3 even:bg-gray-100 odd:bg-white hover:bg-gray-200 transition-colors rounded-xs">
      {/* Name + Icon */}
      <div className="flex-1 flex items-center gap-3 cursor-pointer" onClick={type == 'folder' ? openFolder : 0}>
        {type === 'folder' ? (
          <FaFolder className="text-yellow-500 text-xl" />
        ) : (
          <FaFileAlt className="text-blue-500 text-xl" />
        )}
        <span className="font-medium text-sm text-gray-800">{type == 'folder' ? name : name.substring(14, name.length)}</span>
      </div>

      {/* Owner */}
      <div className="w-32 text-gray-500 text-sm">{owner}</div>

      {/* Size */}
      <div className="w-32 text-gray-500 text-sm">{size ? `${(size / 1024).toFixed(2)} KB` : ""}</div>

      {/* Date Modified */}
      <div className="w-32 text-gray-500 text-sm">{date}</div>

      {/* More Options */}
      <div className="relative inline-block menu-container">

        <div
          className="w-10 text-gray-400 hover:text-gray-700 cursor-pointer text-sm"
          onClick={() => handleMoreOptions(id)}
        >
          <FaEllipsisV />
        </div>

        {activeMenu === id && (
          <div className="absolute right-2 top-full mt-2 w-44 bg-white shadow-xl rounded-xl p-2 z-50">

            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              Download
            </button>

            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              Rename
            </button>

            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              Share
            </button>

          </div>
        )}

      </div>

      {/* <div className="w-10 text-gray-400 hover:text-gray-700 cursor-pointer text-sm" onClick={handleMoreOptions}>
        <FaEllipsisV />
      </div>

      {
        displayOptions && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl p-2 border">

            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              Download
            </button>

            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              Rename
            </button>

            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
              Share
            </button>

          </div>
        )
      } */}


    </div>
  );
};

export default TableRow;