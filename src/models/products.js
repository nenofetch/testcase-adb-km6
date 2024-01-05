"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.productassets, {
        foreignKey: "product_id",
        as: "assets",
      });
      Products.belongsTo(models.categories, {
        as: "category",
      });
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "products",
      underscored: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Products;
};
