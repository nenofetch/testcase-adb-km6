"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductAssets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductAssets.belongsTo(models.products, {
        as: "product",
      });
    }
  }
  ProductAssets.init(
    {
      image: DataTypes.BLOB("long"),
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "productassets",
      underscored: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return ProductAssets;
};
