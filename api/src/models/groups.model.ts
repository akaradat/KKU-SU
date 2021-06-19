import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Group } from '@interfaces/groups.interface';

export type UserCreationAttributes = Optional<Group, 'id'>;

export class GroupModel extends Model<Group, UserCreationAttributes> implements Group {
  public id: number;
  public name: string;
  public facebookURL: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof GroupModel {
  GroupModel.init(
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
      facebookURL: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'groups',
      sequelize,
    },
  );

  return GroupModel;
}
