const db = require("../models");
const Op = db.Sequelize.Op;

const Category = db.categories;

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    return res.status(200).json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(417).json({
        status: "failed",
        message: "Name is required",
      });
    } else {
      const category = await Category.create({
        name,
      });

      return res.status(201).json({
        status: "success",
        data: category,
      });
    }
  } catch (error) {
    return res.status(417).json({
      status: "failed",
      message: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    await Category.update(
      { name: name },
      {
        where: {
          id,
        },
      }
    );

    return res.status(200).json({
      status: "success",
      message: "Category successfully updated",
    });
  } catch (error) {
    return res.status(417).json({
      status: "failed",
      message: error.message,
    });
  }
};

const detailCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findOne({
      where: {
        id,
      },
      rejectOnEmpty: true,
    });

    return res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: "Category not found",
    });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await Category.destroy({
      where: {
        id,
      },
    });

    return res.status(200).json({
      status: "deleted",
      message: "Category successfully deleted",
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: "Category not found",
    });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  detailCategory,
  deleteCategory,
};
