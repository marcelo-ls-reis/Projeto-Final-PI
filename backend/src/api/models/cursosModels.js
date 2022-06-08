const { Model, DataTypes } = require('sequelize');

class Cursos extends Model {
    static init(sequelize) {
        super.init({
            cur_area: DataTypes.STRING,
            cur_descricao: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Cursos;