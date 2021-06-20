import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Sponsor } from '@interfaces/sponsors.interface';

export type SponsorCreationAttributes = Optional<Sponsor, 'id'>;

export class SponsorModel extends Model<Sponsor, SponsorCreationAttributes> implements Sponsor {
  public id: number;
  public title: string;
  public detail: string;
  public img: string;
  public link: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof SponsorModel {
  SponsorModel.init(
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
    },
    {
      tableName: 'sponsors',
      sequelize,
    },
  );

  return SponsorModel;
}
