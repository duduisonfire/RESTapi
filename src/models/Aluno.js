import { Model, DataTypes } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome deve ter no mínimo 3 caracteres.',
          },
        },
      },
      sobrenome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O sobrenome deve ter no mínimo 3 caracteres.',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Idade precisa ser um numero',
          },
        },
      },
      peso: {
        type: DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero',
          },
        },
      },
      altura: {
        type: DataTypes.FLOAT,
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
}
