const db = require("../models");
const Op = db.Sequelize.Op;

// declaration variable
const Products = db.products;

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: ["category"],
    });

    return res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const detailProduct = async (req, res) => {
  const { id } = req.params;

  const data = await Products.findAll({
    include: ["category"],
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });

  return res.status(200).json(data);
};

const createProduct = async (req, res) => {
  const { name, price, category_id } = req.body;
  let slug = name.trim().replace(/\s+/g, "-").toLowerCase();

  try {
    const product = await Products.create({
      name,
      price,
      slug,
      category_id,
    });

    return res.status(201).json({
      status: "success",
      message: "Product successfully created",
      data: product,
    });
  } catch (error) {
    return res.status(417).json({
      status: "failed",
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { name, price, category_id } = req.body;
  const { id } = req.params;
  let slug = name.trim().replace(/\s+/g, "-").toLowerCase();

  try {
    await Products.update(
      {
        name: name,
        price: price,
        slug: slug,
        category_id: category_id,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.status(200).json({
      status: "success",
      message: "Product successfully updated",
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Products.destroy({
      where: id,
    });

    return res.status(200).json({
      status: "deleted",
      message: "Product successfully deleted",
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  detailProduct,
};
