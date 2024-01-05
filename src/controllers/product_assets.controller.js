const fs = require("fs");
const db = require("../models");

const assets = db.productassets;

const getAllImages = async (req, res) => {
  try {
    const images = await assets.findAll({
      include: ["product"],
    });

    return res.status(200).json({
      status: "success",
      data: images,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const uploadAsset = async (req, res) => {
  const { product_id } = req.body;
  const image = req.file;
  try {
    if (!req.file) {
      return res.json({
        message: "Please upload a file",
      });
    }

    const product = assets.create({
      image,
      product_id,
    });

    return res.status(201).json({
      message: "File uploaded successfully",
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const updateAsset = async (req, res) => {
  const { product_id } = req.body;
  const { id } = req.params;
  const image = req.file;

  try {
    await assets.update(
      {
        image,
        product_id,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(201).json({
      message: "File updated successfully",
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const deleteAsset = async (req, res) => {
  const { id } = req.params;

  try {
    await assets.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: "File deleted successfully",
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  getAllImages,
  uploadAsset,
  updateAsset,
  deleteAsset,
};
