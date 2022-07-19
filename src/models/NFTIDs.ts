import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const NFTIDs = sequelize.define(
    'NFTIDs',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      nftId: {
        type: DataType.STRING,
        field: 'nftId',
      },
      transactionHash: { type: DataType.STRING, field: 'transactionHash' },
    },
    {
      tableName: 'nftIds',
      timestamps: true,
    }
  );

  return NFTIDs;
};
