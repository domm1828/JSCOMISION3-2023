'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addressUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING(45)
      },
      province: {
        type: Sequelize.STRING(45)
      },
      street: {
        type: Sequelize.STRING(45)
      },
      number: {
        type: Sequelize.STRING(45)
      },
      code_postal: {
        type: Sequelize.STRING(45)
      },
      address: {
        type: Sequelize.STRING(45)
      },
      users_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
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
    await queryInterface.dropTable('addressUsers');
  }
};