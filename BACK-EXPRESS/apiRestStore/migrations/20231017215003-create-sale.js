'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number_invoice: {
        unique:true,
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      date_invoice: {
        type: Sequelize.DATE
      },
      time_invoice: {
        type: Sequelize.TIME
      },
      type_invoice: {
        type: Sequelize.INTEGER
      },
      users_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        }
      },
      address_users_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'addressUsers',
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
    await queryInterface.dropTable('sales');
  }
};