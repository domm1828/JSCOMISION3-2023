'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addressUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addressUser.init({
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    code_postal: DataTypes.STRING,
    address: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'addressUser',
  });
  return addressUser;
};