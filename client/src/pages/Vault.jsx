import React, { useState,useEffect } from "react";
import Navbar from '../components/Navbar.jsx'
import TableRow from '../components/TableRow.jsx'
import FolderHeader from '../components/FolderHeader.jsx'

const Vault = () => {
    const files = [
        { type: 'folder', name: 'Projects', owner: 'Garvit', size: '1 KB', date: 'Mar 21, 2026' },
        { type: 'file', name: 'Report.pdf', owner: 'Alice', size: '10 KB', date: 'Mar 20, 2026' },
        { type: 'file', name: 'Image.png', owner: 'Bob', size: '2 KB', date: 'Mar 18, 2026' },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const folderName = "Documents"; // dynamic later

    const handleRefresh = () => {
        console.log("Refreshing data...");
        // call API again here
    };


    return (
        <div>
            <Navbar />

            <div className="p-4">
                <FolderHeader
                    folderName={folderName}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onRefresh={handleRefresh}
                />

                {/* Example content
                <div className="mt-4">
                    <p>Search: {searchQuery}</p>
                </div> */}
            </div>

            <div className="w-screen mx-auto mt-2 px-2 bg-white">
                <div className="flex px-10 py-2 font-semibold text-gray-600 ">
                    <div className="flex-1">Name</div>
                    <div className="w-32">Owner</div>
                    <div className="w-32">Size</div>
                    <div className="w-32">Date Modified</div>
                    <div className="w-10"></div>
                </div>

                {files.map((file, index) => (
                    <TableRow
                        key={index}
                        type={file.type}
                        name={file.name}
                        owner={file.owner}
                        size={file.size}
                        date={file.date}
                    />
                ))}
            </div>
        </div>
    )
}

export default Vault