import { Model } from 'sequelize';

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
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

export default Admin;
