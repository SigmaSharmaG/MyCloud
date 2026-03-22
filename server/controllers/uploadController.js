const File = require("../models/File");
const Folder = require("../models/Folder");

exports.uploadFile = async (req,res) => {
    try{
        const file = req.file;

        // If no file was uploaded
        if (!file){
            return res.status(400).json({
                success:false,
                message:"No file uploaded",
            });
        }

        // Save metadata
        const newFile = await File.create({
            name: req.file.originalname,
            user: req.user.id, // from auth middleware
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size,
            type: req.file.mimetype,
        });

        res.status(200).json({
            success: true,
            file: newFile
        });


    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// TODO
// For multiple file upload
