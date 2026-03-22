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