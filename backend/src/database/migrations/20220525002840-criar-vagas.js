'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('vagas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      vag_empresa: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      vag_area: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      vag_descricao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      vag_margemwalarial: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      vag_vagasdisponiveis: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vag_datapublicacao: {
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
    return await queryInterface.dropTable('vagas')
  }
};

