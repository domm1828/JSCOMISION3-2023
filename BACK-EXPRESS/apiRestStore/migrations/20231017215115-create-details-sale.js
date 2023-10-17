'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detailsSales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      products_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'products',
          key:'id'
        }
      },
      sales_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'sales',
          key:'id'
        }
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
    await queryInterface.dropTable('detailsSales');
  }
};