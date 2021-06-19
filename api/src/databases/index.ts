import config from 'config';
import Sequelize from 'sequelize';
import { dbConfig } from '@interfaces/db.interface';
import UserModel from '@models/users.model';
import GroupModel from '@models/groups.model';
import { logger } from '@utils/logger';

const { host, user, password, database, pool }: dbConfig = config.get('dbConfig');
const sequelize = new Sequelize.Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: pool.min,
    max: pool.max,
  },
  logQueryParameters: process.env.NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  Groups: GroupModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

DB.Groups.hasMany(DB.Users);
DB.Users.belongsTo(DB.Groups, { foreignKey: 'groupId', as: 'group' });

export default DB;
