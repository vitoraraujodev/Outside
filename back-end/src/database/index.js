import Sequelize from 'sequelize';

import User from '../app/models/User';
import Admin from '../app/models/Admin';

import databaseConfig from '../config/database';

const models = [User, Admin]; // Todos os models a serem carregados

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
