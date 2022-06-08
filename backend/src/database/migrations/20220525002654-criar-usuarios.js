'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usu_login: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      usu_senha: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      usu_nomecompleto: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      usu_telefonecontato: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      usu_emailcontato: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('usuarios')
  }
};

