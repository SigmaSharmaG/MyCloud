const File = require("../models/File");
const fs = require("fs");
const path = require("path");

const readFolder = (dirPath, basePath = "") => {
    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    const folders = [];
    const files = [];

    items.forEach(item => {
        const itemPath = path.join(dirPath, item.name);
        const relativePath = path.join(basePath, item.name);

        if (item.isDirectory()) {
            folders.push({
                name: item.name,
                path: relativePath,
                ...readFolder(itemPath, relativePath)
            });
        } else {
            const stats = fs.statSync(itemPath);
            files.push({
                name: item.name,
                path: relativePath,
                size: stats.size,
                type: path.extname(item.name)
            });
        }
    });

    return { folders, files };
};

// List Files & Folders
exports.listFiles = async (req, res) => {
    try {
        const userId = req.user.id;
        const folderPath = req.query.folderPath || ""; // optional nested folder

        const fullPath = path.join("storage", userId, folderPath);

        if (!fs.existsSync(fullPath)) {
            return res.status(404).json({ message: "Folder not found" });
        }

        const result = {
            name: folderPath || "root",
            path: folderPath || "",
            ...readFolder(fullPath, folderPath)
        };

        res.status(201).json(result);

    } catch (err) {
        res.status(500).json({ message: "Error reading files", error: err.message });
    }
};

// TODO

// Create folder
exports.createFolder = async (req,res) => {
    try{
        const userId = req.user.id;
        const {folderPath,folderName} = req.body;

        if (!folderName){
            return res.status(400).json({
                success:false,
                message:"Folder name is required",
            })
        }

        const basePath = path.join("storage", userId, folderPath || "");

        // full new folder path
        const fullPath = path.join(basePath, folderName);

        // Check if path already exist
        if (fs.existsSync(fullPath)){
            return res.status(400).json({
                success:true,
                message:"Folder already exists"
            })
        }

        // create folder
        fs.mkdirSync(fullPath, { recursive: true });

        return res.status(200).json({
            success:true,
            message:"Folder created successfully"
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// Delete File
exports.deleteFile = async (req, res) => {
    try {
        const userId = req.user.id;
        const filePath = req.body.path;

        // If there is no filepath given
        if (!filePath) {
            return res.status(400).json({
                success: false,
                message: "File path is required"
            })
        }

        // Creating fullpath
        const fullPath = path.join("storage", userId, filePath);

        // Check whether file exist or not
        if (!fs.existsSync(fullPath)) {
            return res.status(404).json({
                message: "File not found"
            });
        }

        // Delete file
        fs.unlinkSync(fullPath);

        return res.status(201).json({
            success: true,
            message: "File deleted successfully"
        });


    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,

        })
    }
}

// Delete Folder
exports.deleteFolder = async (req, res) => {
    try {
        const userId = req.user.id;
        const folderPath = req.body.path;

        // If no folder path is given
        if (!folderPath) {
            return res.status(400).json({
                success: false,
                message: "Folder path is required"
            })
        }

        // Creating fullpath
        const fullPath = path.join("storage", userId, folderPath);

        // Check folder exist or not
        if (!fs.existsSync(fullPath)) {
            return res.status(404).json({
                success: false,
                message: "Folder not found"
            })

        }

        // Delete folder recurively
        fs.rmSync(fullPath, { recursive: true, force: true });

        return res.status(200).json({
            success: true,
            message: "Folder deleted successfully",
        })


    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,

        })
    }
}


// Rename file
exports.renameFile = async (req, res) => {
    try {
        const userId = req.user.id;
        const { oldPath, newName } = req.body;

        // If path is missing
        if (!oldPath || !newName) {
            return res.status(400).json({
                success: true,
                message: "Old path and new name are required"
            });

        }

        // Getting full path
        const oldFullPath = path.join("storage", userId, oldPath);

        // check file exists
        if (!fs.existsSync(oldFullPath)) {
            return res.status(404).json({
                success: false,
                message: "File not found"
            });
        }

        // Get directory
        const dir = path.dirname(oldFullPath);
        const ext = path.extname(oldFullPath);
        const newFullPath = path.join(dir, newName + ext);

        // rename
        fs.renameSync(oldFullPath, newFullPath);

        return res.status(200).json({
            success: true,
            message: "File renamed successfully",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,

        })
    }
}

// Rename folder

const moveFolder = (src, dest) => {
    fs.mkdirSync(dest, { recursive: true });

    const items = fs.readdirSync(src);

    for (const item of items) {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);

        const stats = fs.statSync(srcPath);

        if (stats.isDirectory()) {
            moveFolder(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }

    fs.rmSync(src, { recursive: true, force: true });
};

exports.renameFolder = async (req, res) => {
    try {
        const userId = req.user.id;
        const { oldFolderPath, newFolderName } = req.body;

        if (!oldFolderPath || !newFolderName) {
            return res.status(400).json({
                success: false,
                message: "Old path and new name are required"
            });
        }

        const oldFullPath = path.join("storage", userId, oldFolderPath);

        if (!fs.existsSync(oldFullPath)) {
            return res.status(404).json({
                success: false,
                message: "Folder not found"
            });
        }

        const parentDir = path.dirname(oldFullPath);
        const newFullPath = path.join(parentDir, newFolderName);

        if (fs.existsSync(newFullPath)) {
            return res.status(400).json({
                success: false,
                message: "Folder with this name already exists"
            });
        }

        // Rename first
        try {
            fs.renameSync(oldFullPath, newFullPath);
        } catch (err) {
            console.log("Rename failed, using fallback:", err.message);

            // 🔥 fallback (always works)
            moveFolder(oldFullPath, newFullPath);
        }

        return res.status(200).json({
            success: true,
            message: "Folder renamed successfully",
            newPath: path.join(path.dirname(oldFolderPath), newFolderName)
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
