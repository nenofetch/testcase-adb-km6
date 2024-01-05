const express = require("express");
const categoryController = require("../controllers/category.controller");

const route = express.Router();

route.get("/", categoryController.getAllCategories);
route.post("/", categoryController.createCategory);
route.put("/:id", categoryController.updateCategory);
route.get("/:id", categoryController.detailCategory);
route.delete("/:id", categoryController.deleteCategory);

module.exports = route;
