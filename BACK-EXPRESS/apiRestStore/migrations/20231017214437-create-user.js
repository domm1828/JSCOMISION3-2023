'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      email: {
        allowNull: false,
        unique:true,
        type: Sequelize.STRING(45)
      },
      password: {
        allowNull: false, 
        type: Sequelize.STRING(45)
      },
      phone: {
        type: Sequelize.STRING(12)
      },
      type_user: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('users');
  }
};