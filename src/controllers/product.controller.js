import db from "../../models";

// declaration variable
const Products = db.products;

export const getAllProducts = async (req, res) => {
  const products = await Products.findAll({
    include: ["categories", "assets"],
  });

  res.send(products);
};

export const detailProduct = async (req, res) => {
  const { id } = req.body;

  const data = await Products.findAll({
    where: id,
  });

  return res.status(200).json(data);
};

export const createProduct = async (req, res) => {
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

export const updateProduct = async (req, res) => {
  const { id, name, price } = req.body;
};

export const deleteProduct = async (req, res) => {
  const { id } = req.body;

  const data = await Products.destroy({
    where: id,
  });

  return res.json(data);
};
