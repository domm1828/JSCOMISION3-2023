'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING(200)
      },
      amount: {
        allowNull:false,
        defaultValue:0,
        type: Sequelize.FLOAT
      },
      stock: {
        allowNull:false,
        defaultValue:0,
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING(45)
      },
      size: {
        type: Sequelize.STRING(2)
      },
      category: {
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};