import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const TransferNFT = sequelize.define(
    'TransferNFT',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      count: { type: DataType.STRING, field: 'count' },
      from: { type: DataType.STRING, field: 'from' },
      to: { type: DataType.STRING, field: 'to' },
      nftId: { type: DataType.INTEGER, field: 'nftId' },
      blockNumber: { type: DataType.INTEGER, field: 'blockNumber' },
      transactionHash: {
        type: DataType.STRING,
        field: 'transactionHash',
        unique: true,
      },
    },
    {
      tableName: 'transferNFT',
      timestamps: false,
    }
  );

  return TransferNFT;
};
