'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('aplicacao_vagas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      apV_idusuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      apV_idvaga: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      apV_resultaplicacao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      apV_dataaplicacao: {
        type: Sequelize.DATE,
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
    return await queryInterface.dropTable('aplicacao_vagas')
  }
};

