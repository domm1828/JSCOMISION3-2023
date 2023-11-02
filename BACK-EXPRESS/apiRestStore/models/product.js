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
    category: {
      type:DataTypes.STRING,
      set(value){
        this.setDataValue('category',value.toUpperCase())
      }
    },
    photo:DataTypes.TEXT,
    total:{
      type:DataTypes.VIRTUAL(DataTypes.FLOAT,['amount','stock']),
      get(){
        return `${this.amount*this.stock}`;
      }
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};