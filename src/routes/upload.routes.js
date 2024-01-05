const express = require("express");
const multer = require("multer");
const upload = multer();

const uploadController = require("../controllers/product_assets.controller");

const router = express.Router();

router.get("/", uploadController.getAllImages);
router.post("/", upload.single("image"), uploadController.uploadAsset);
router.put("/:id", upload.single("image"), uploadController.updateAsset);
router.delete("/:id", uploadController.deleteAsset);

module.exports = router;
