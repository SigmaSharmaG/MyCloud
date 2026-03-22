import React from 'react';
import { FaFolder, FaFileAlt, FaEllipsisV } from 'react-icons/fa';

const TableRow = ({ type, name, owner,size, date }) => {
  return (
    <div className="flex items-center px-10 py-3 even:bg-gray-100 odd:bg-white hover:bg-gray-200 transition-colors rounded-xs">
      {/* Name + Icon */}
      <div className="flex-1 flex items-center gap-3">
        {type === 'folder' ? (
          <FaFolder className="text-yellow-500 text-xl" />
        ) : (
          <FaFileAlt className="text-blue-500 text-xl" />
        )}
        <span className="font-medium text-sm text-gray-800">{name}</span>
      </div>

      {/* Owner */}
      <div className="w-32 text-gray-500 text-sm">{owner}</div>

      {/* Size */}
      <div className="w-32 text-gray-500 text-sm">{size}</div>

      {/* Date Modified */}
      <div className="w-32 text-gray-500 text-sm">{date}</div>

      {/* More Options */}
      <div className="w-10 text-gray-400 hover:text-gray-700 cursor-pointer text-sm">
        <FaEllipsisV />
      </div>
    </div>
  );
};

export default TableRow;