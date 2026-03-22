const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { listFiles } = require("../controllers/fileController");
const router = express.Router();

router.get("/",protect,listFiles);

module.exports = router;