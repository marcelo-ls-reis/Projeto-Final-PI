const { Model, DataTypes } = require('sequelize');

class Empresas extends Model {
    static init(sequelize) {
        super.init({
            emp_cnpj: DataTypes.STRING,
            emp_nome: DataTypes.STRING,
            emp_contato: DataTypes.STRING,
            emp_email: DataTypes.STRING,
            emp_endereco: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Empresas;