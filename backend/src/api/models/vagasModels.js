const { Model, DataTypes } = require('sequelize');

class aplicacaoVagas extends Model {
    static init(sequelize) {
        super.init({
            vag_empresa: DataTypes.STRING,
            vag_area: DataTypes.STRING,
            vag_descricao: DataTypes.STRING,
            vag_margemsalarial: DataTypes.STRING,
            vag_vagasdisponiveis: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = aplicacaoVagas;

