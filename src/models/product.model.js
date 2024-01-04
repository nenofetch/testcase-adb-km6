"use strict";

export default (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );

  Products.associate = (models) => {
    Products.belongsTo(models.categories, {
      through: "id",
      foreignKey: "category_id",
      as: "categories",
    });

    Products.belongsToMany(models.products_assets, {
      through: "product_id",
      foreignKey: "id",
      as: "assets",
    });
  };

  return Products;
};
