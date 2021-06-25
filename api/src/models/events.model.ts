import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Event } from '@interfaces/events.interface';

export type EventCreationAttributes = Optional<Event, 'id'>;

export class EventModel extends Model<Event, EventCreationAttributes> implements Event {
  public id: number;
  public title: string;
  public detail: string;
  public img: string;
  public link: string;
  public type: 'EVENT' | 'CHECK';

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof EventModel {
  EventModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      detail: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      img: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      link: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'events',
      sequelize,
    },
  );

  return EventModel;
}
