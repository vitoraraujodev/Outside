import Sequelize, { Model } from 'sequelize';

class Request extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        kind: Sequelize.STRING,
        latitude: Sequelize.FLOAT,
        longitude: Sequelize.FLOAT,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Request;
