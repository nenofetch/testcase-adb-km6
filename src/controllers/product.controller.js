const db = require("../models");

// declaration variable
const Products = db.products;

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: ["categories", "assets"],
    });

    return res.json(products);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const detailProduct = async (req, res) => {
  const { id } = req.body;

  const data = await Products.findAll({
    where: id,
  });

  return res.status(200).json(data);
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;

  const product = await Products.create({
    name,
    price,
  });

  return res.status(201).json({
    message: "Product successfully created",
    data: product,
  });
};

const updateProduct = async (req, res) => {
  const { id, name, price } = req.body;
};

const deleteProduct = async (req, res) => {
  const { id } = req.body;

  const data = await Products.destroy({
    where: id,
  });

  return res.json(data);
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  detailProduct,
};
