import { Model, DataTypes } from 'sequelize';
import appConfig from '../config/app';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      original_name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Este campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Este campo não pode ficar vazio',
          },
        },
      },
      url: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
