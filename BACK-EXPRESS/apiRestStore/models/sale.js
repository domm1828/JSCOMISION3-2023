'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sale.init({
    number_invoice: DataTypes.STRING,
    date_invoice: DataTypes.DATE,
    time_invoice: DataTypes.TIME,
    type_invoice: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    address_users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sale',
  });
  return sale;
};