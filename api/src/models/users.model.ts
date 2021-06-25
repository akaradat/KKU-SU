import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'id' | 'password'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public id: number;
  public name: string;
  public nickname: string;
  public studentId: string;
  public faculty: string;
  public branch: string;
  public tel: string;
  public email: string;
  public facebook: string;
  public password: string;
  public groupId: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      nickname: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      studentId: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      faculty: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      branch: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      tel: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      facebook: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING(255),
      },
      groupId: {
        references: {
          model: 'groups',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
