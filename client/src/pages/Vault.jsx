import React, { useState, useEffect, useRef, use } from "react";
import Navbar from '../components/Navbar.jsx'
import TableRow from '../components/TableRow.jsx'
import FolderHeader from '../components/FolderHeader.jsx'
import axios from "axios";
import { toast } from "react-toastify";
import './loader.css'
const Vault = () => {
    // const files = [
    //     { type: 'folder', name: 'Projects', owner: 'Garvit', size: '1 KB', date: 'Mar 21, 2026' },
    //     { type: 'file', name: 'Report.pdf', owner: 'Alice', size: '10 KB', date: 'Mar 20, 2026' },
    //     { type: 'file', name: 'Image.png', owner: 'Bob', size: '2 KB', date: 'Mar 18, 2026' },
    // ];

    const [searchQuery, setSearchQuery] = useState("");
    const [activeSearch, setActiveSearch] = useState("");
    const [folderName, setFolderName] = useState(""); // dynamic later
    const [addFolder, setAddFolder] = useState(false);
    const [newFolderName, setNewFolderName] = useState("");

    const [data, setData] = useState(null);
    const [files, setFiles] = useState([]);

    const [root, setRoot] = useState(null);
    const [currentFolder, setCurrentFolder] = useState(null);
    const [history, setHistory] = useState([]);

    const containerRef = useRef(null);

    // const [filteredFolders,setFilteredFolder] = useState([]);


    // if (activeSearch!=""){
    //     console.log(activeSearch)
    //     const query = activeSearch.toLowerCase();
    //     const Folders = currentFolder.folders.filter(folder =>
    //     folder.name.toLowerCase().includes(query)
    // );
    //     setFilteredFolder(Folders);
    //     console.log("Filtered folder ",filteredFolders);
    // }

    // const filteredFiles = currentFolder.files.filter(file =>
    //     file.name.toLowerCase().includes(query)
    // );

    const query = activeSearch.toLowerCase();

    const filteredFolders = activeSearch !== ""
        ? (currentFolder?.folders || []).filter(folder =>
            folder.name.toLowerCase().includes(query)
        )
        : currentFolder?.folders || [];

    const filteredFiles = activeSearch !== ""
        ? (currentFolder?.files || []).filter(file =>
            file.name.toLowerCase().includes(query)
        )
        : currentFolder?.files || [];

    const [activeMenu, setActiveMenu] = useState(null);

    const handleMoreOptions = (id) => {
        setActiveMenu(prev => (prev === id ? null : id));
    };

    const getAllFiles = (folder) => {
        let allFiles = [...folder.files];

        for (let subFolder of folder.folders) {
            allFiles = [...allFiles, ...getAllFiles(subFolder)];
        }

        return allFiles;
    };

    const handleFileLoad = async (folderPath) => {
        try {
            const path = '' || folderPath;
            const token = localStorage.getItem("token"); // 🔥 get token

            const res = await axios.get(
                "http://localhost:4000/api/files/",
                {
                    params: { folderPath: path },
                    headers: {
                        Authorization: `Bearer ${token}` // 🔥 attach token
                    }
                }
            );
            // console.log("Hello", res.data)

            return res.data;
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [currentFolder]);

    useEffect(() => {
        const apiData2 = {
            "name": "root",
            "path": "",
            "folders": [
                {
                    "name": "ABES",
                    "path": "ABES",
                    "folders": [],
                    "files": []
                },
                {
                    "name": "college",
                    "path": "college",
                    "folders": [
                        {
                            "name": "KIET",
                            "path": "college\\KIET",
                            "folders": [],
                            "files": [
                                {
                                    "name": "1774380872888-diagram-export-3-15-2026-11_04_49-PM.png",
                                    "path": "college\\KIET\\1774380872888-diagram-export-3-15-2026-11_04_49-PM.png",
                                    "size": 195877,
                                    "type": ".png"
                                },
                                {
                                    "name": "1774381190070-Screenshot 2026-03-22 202310.png",
                                    "path": "college\\KIET\\1774381190070-Screenshot 2026-03-22 202310.png",
                                    "size": 230698,
                                    "type": ".png"
                                },
                                {
                                    "name": "1774381231542-Hackathon.pptx",
                                    "path": "college\\KIET\\1774381231542-Hackathon.pptx",
                                    "size": 6171112,
                                    "type": ".pptx"
                                },
                                {
                                    "name": "1774381269920-Smart Waste Monitor.html",
                                    "path": "college\\KIET\\1774381269920-Smart Waste Monitor.html",
                                    "size": 73362,
                                    "type": ".html"
                                }
                            ]
                        }
                    ],
                    "files": []
                },
                {
                    "name": "document",
                    "path": "document",
                    "folders": [
                        {
                            "name": "college",
                            "path": "document\\college",
                            "folders": [],
                            "files": [
                                {
                                    "name": "1774375321541-diagram-export-3-15-2026-11_04_49-PM.png",
                                    "path": "document\\college\\1774375321541-diagram-export-3-15-2026-11_04_49-PM.png",
                                    "size": 195877,
                                    "type": ".png"
                                }
                            ]
                        }
                    ],
                    "files": []
                }
            ],
            "files": [
                {
                    "name": "1774173789905-WhatsApp Image 2026-03-19 at 2.45.18 PM (1).jpeg",
                    "path": "1774173789905-WhatsApp Image 2026-03-19 at 2.45.18 PM (1).jpeg",
                    "size": 72417,
                    "type": ".jpeg"
                },
                {
                    "name": "1774174443356-WhatsApp Video 2026-03-21 at 12.51.14 AM.mp4",
                    "path": "1774174443356-WhatsApp Video 2026-03-21 at 12.51.14 AM.mp4",
                    "size": 479095,
                    "type": ".mp4"
                },
                {
                    "name": "1774174963199-diagram-export-3-15-2026-11_04_49-PM.png",
                    "path": "1774174963199-diagram-export-3-15-2026-11_04_49-PM.png",
                    "size": 195877,
                    "type": ".png"
                },
                {
                    "name": "1774175049497-diagram-export-3-15-2026-11_04_49-PM.png",
                    "path": "1774175049497-diagram-export-3-15-2026-11_04_49-PM.png",
                    "size": 195877,
                    "type": ".png"
                },
                {
                    "name": "1774175131685-diagram-export-3-15-2026-11_04_49-PM.png",
                    "path": "1774175131685-diagram-export-3-15-2026-11_04_49-PM.png",
                    "size": 195877,
                    "type": ".png"
                },
                {
                    "name": "1774175293921-diagram-export-3-15-2026-11_04_49-PM.png",
                    "path": "1774175293921-diagram-export-3-15-2026-11_04_49-PM.png",
                    "size": 195877,
                    "type": ".png"
                },
                {
                    "name": "1774175332701-diagram-export-3-15-2026-11_04_49-PM.png",
                    "path": "1774175332701-diagram-export-3-15-2026-11_04_49-PM.png",
                    "size": 195877,
                    "type": ".png"
                },
                {
                    "name": "1774175626118-diagram-export-3-15-2026-11_04_49-PM.png",
                    "path": "1774175626118-diagram-export-3-15-2026-11_04_49-PM.png",
                    "size": 195877,
                    "type": ".png"
                },
                {
                    "name": "helloworld.png",
                    "path": "helloworld.png",
                    "size": 12201,
                    "type": ".png"
                }
            ]
        }
        // const res = handleFileLoad();
        // // console.log(res);
        // const apiData = res;

        // setRoot(apiData);
        // setCurrentFolder(apiData);

        const loadData = async () => {
            const data = await handleFileLoad();

            setRoot(data);
            setCurrentFolder(data);
        };

        loadData();
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".menu-container")) {
                setActiveMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // useEffect(() => {
    //     const apiData = {
    //         name: "root",
    //         path: "",
    //         folders: [
    //             {
    //                 name: "college",
    //                 path: "college",
    //                 folders: [
    //                     {
    //                         name: "KIET",
    //                         path: "college\\KIET",
    //                         folders: [],
    //                         files: [
    //                             {
    //                                 name: "Hackathon.pptx",
    //                                 path: "college\\KIET\\Hackathon.pptx",
    //                                 size: 6171112,
    //                                 type: ".pptx"
    //                             }
    //                         ]
    //                     }
    //                 ],
    //                 files: []
    //             }
    //         ],
    //         files: [
    //             {
    //                 name: "helloworld.png",
    //                 path: "helloworld.png",
    //                 size: 12201,
    //                 type: ".png"
    //             }
    //         ]
    //     };

    //     setData(apiData);

    //     const allFiles = getAllFiles(apiData);
    //     setFiles(allFiles);
    // }, []);

    const openFolder = (path) => {
        console.log("Opening folder", path);
        const loadData = async (path) => {
            const data = await handleFileLoad(path);

            setRoot(data);
            setCurrentFolder(data);
            setHistory([...history, path]);
            // setHistory(prev => [...prev, path]);
            setFolderName(path)


        };

        loadData(path);

        // setCurrentFolder(folder);
    };

    const goBack = () => {
        console.log("Moving back")
        const prev = history[history.length - 2];
        console.log(prev)
        setHistory(history.slice(0, -1));
        console.log(history);
        // // setCurrentFolder(prev);

        const loadData = async (path) => {
            const data = await handleFileLoad(path);

            setRoot(data);
            setCurrentFolder(data);
            // setHistory([...history,path]);
            setFolderName(path)


        };

        loadData(prev);

        // if (history.length === 0) return; // safety

        // const prev = history[history.length - 1];

        // // remove last item FIRST
        // setHistory(prevHistory => prevHistory.slice(0, -1));

        // // load previous folder
        // const loadData = async (prev) => {
        //     const data = await handleFileLoad(prev);

        //     setRoot(data);
        //     setCurrentFolder(data);
        //     setFolderName(prev);
        // }
        // loadData(prev);
    };

    if (!currentFolder) return <div className="max-w-screen h-screen flex justify-center items-center">
        <div className="loader"></div>
    </div>;


    // Handle refresh
    const handleRefresh = () => {
        console.log("Refreshing data...");
        // call API again here
        const loadData = async () => {
            const data = await handleFileLoad(folderName);

            setRoot(data);
            setCurrentFolder(data);


        };

        loadData();
        console.log("After refresh", currentFolder)
    };

    // Helps to reset the vault to root
    const resetVault = () => {
        console.log("Resetingg")
        const loadData = async () => {
            const data = await handleFileLoad("");

            setRoot(data);
            setCurrentFolder(data);
            setFolderName("My Vault")


        };

        loadData();
    }

    // Handles new folder creation
    const handleAddFolder = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log(token);
            const path = "" || folderName;

            const res = await axios.post("http://localhost:4000/api/files/createFolder", {
                folderPath: path, // or dynamic
                folderName: newFolderName
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setNewFolderName("");
            displayNewFolderModal();
            await handleRefresh();

            // toast.success("New file uploaded created");

            toast.success("New folder created");
            console.log(res);
        }
        catch (error) {
            console.error(error);
        }
    }

    // Display or remove the new folder modal
    const displayNewFolderModal = () => {
        setAddFolder(!addFolder);
    }

    // Handles input on change event
    const handleChange = (event) => {
        setNewFolderName(event.target.value);

    }

    // Handles file upload
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        const path = "" || folderName

        try {
            const token = localStorage.getItem("token");
            console.log(token);
            const res = await axios.post(
                `http://localhost:4000/api/upload/file?folderPath=${path}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // console.log(res.data);
            await handleRefresh();

            toast.success("New file uploaded created");
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="h-screen overflow-hidden">
            <Navbar resetVault={resetVault} />

            <div className="p-4">
                <FolderHeader
                    previous={goBack}
                    folderName={folderName}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setActiveSearch={setActiveSearch}
                    onRefresh={handleRefresh}
                    onUpload={handleUpload}
                    onAddFolder={displayNewFolderModal}
                />

                {/* Example content
                <div className="mt-4">
                    <p>Search: {searchQuery}</p>
                </div> */}
            </div>

            {/* Open model on adding new folder */}
            {addFolder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

                    {/* Modal Box */}
                    <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6">

                        <h2 className="text-xl font-semibold mb-4">Create New Folder</h2>

                        <input
                            type="text"
                            name="newFolderName"
                            value={newFolderName}
                            onChange={handleChange}
                            placeholder="Folder name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={displayNewFolderModal}
                                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                            >
                                Cancel
                            </button>

                            <button
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                                onClick={handleAddFolder}
                            >
                                Create
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* File explorer */}
            <div ref={containerRef}
                className="w-full mx-auto mt-2 px-0 bg-white h-[80vh] overflow-y-auto">
                {/* <div className="w-full mx-auto mt-2 px-0 bg-yellow-500 h-[80vh] overflow-y-auto pb-10"></div>                 */}
                <div className="flex px-10 py-2 font-semibold text-gray-600 sticky top-0 z-10 bg-white">
                    <div className="flex-1">Name</div>
                    <div className="w-32">Owner</div>
                    <div className="w-32">Size</div>
                    <div className="w-32">Date Modified</div>
                    <div className="w-10"></div>
                </div>
                <div className="mb-10 pb-20">


                    {
                        activeSearch != "" && filteredFolders.map((folder) => (
                            <TableRow
                                key={folder.path}
                                id={folder.path}
                                path={folder.path}
                                type="folder"
                                name={folder.name}
                                owner="You"
                                openFolder={() => openFolder(folder.path)}
                                activeMenu={activeMenu}
                                handleMoreOptions={handleMoreOptions}
                                
                            />
                        ))



                    }
                    {
                        activeSearch != "" && filteredFiles.map((file) => (
                            <TableRow
                                key={file.path}
                                name={file.name}
                                id={file.path}
                                path={file.path}
                                owner={"You"}
                                size={file.size}
                                type={file.type}
                                activeMenu={activeMenu}
                                handleMoreOptions={handleMoreOptions}
                            />
                        ))



                    }




                    {/*Folders*/}
                    {activeSearch == "" && currentFolder.folders.map((folder) => (
                        <TableRow
                            key={folder.path}
                            id={folder.path}
                            path={folder.path}
                            type="folder"
                            name={folder.name}
                            owner={"You"}
                            openFolder={() => openFolder(folder.path)}
                            activeMenu={activeMenu}
                            handleMoreOptions={handleMoreOptions}

                        />
                    ))}

                    {/*Files */}

                    {/* {console.log(currentFolder.files)} */}
                    {activeSearch == "" && currentFolder.files.map((file) => (
                        <TableRow
                            key={file.path}
                            id={file.path}
                            path={file.path}
                            type={file.type}
                            name={file.name}
                            owner={"You"}
                            size={file.size}
                            activeMenu={activeMenu}
                            handleMoreOptions={handleMoreOptions}

                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Vault
