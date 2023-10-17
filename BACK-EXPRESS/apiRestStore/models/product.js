'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    size: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};