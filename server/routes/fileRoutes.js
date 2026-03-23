const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { listFiles, createFolder, deleteFile, deleteFolder, renameFile, renameFolder } = require("../controllers/fileController");
const router = express.Router();

router.get("/",protect,listFiles);
router.post("/createFolder",protect,createFolder);
router.delete("/deleteFile",protect,deleteFile);
router.delete("/deleteFolder",protect,deleteFolder);
router.put("/renameFile",protect,renameFile);
router.put("/renameFolder",protect,renameFolder);

module.exports = router;