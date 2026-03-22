const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Storage config
const storage = multer.diskStorage({
    destination : function (req,file,cb){
        const userId = req.user.id;
        const folderPath = req.query.folderPath || "";
        const userFolder = path.join("storage",userId,folderPath);
        // create folder if not exist
        fs.mkdirSync(userFolder,{recursive:true});
        cb(null,userFolder);
    },
    filename: function (req,file,cb){
        const filename = Date.now() + "-" + file.originalname;  
        cb(null,filename);  
    }
});

const upload = multer({storage});
module.exports = upload;