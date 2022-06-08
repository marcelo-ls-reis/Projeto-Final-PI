const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model {
    static init(sequelize) {
        super.init({
            usu_login: DataTypes.STRING,
            usu_senha: DataTypes.STRING,
            usu_nomecompleto: DataTypes.STRING,
            usu_telefonecontato: DataTypes.STRING,
            usu_emailcontato: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Usuarios;