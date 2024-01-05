const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/:id", productController.detailProduct);

module.exports = router;
