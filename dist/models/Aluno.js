"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize.DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome deve ter no mínimo 3 caracteres.',
          },
        },
      },
      sobrenome: {
        type: _sequelize.DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O sobrenome deve ter no mínimo 3 caracteres.',
          },
        },
      },
      email: {
        type: _sequelize.DataTypes.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'email invalido',
          },
        },
        unique: {
          msg: 'Email já existe',
        },
      },
      idade: {
        type: _sequelize.DataTypes.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Idade precisa ser um numero',
          },
        },
      },
      peso: {
        type: _sequelize.DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero',
          },
        },
      },
      altura: {
        type: _sequelize.DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um numero',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
