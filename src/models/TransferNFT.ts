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
      from: { type: DataType.STRING, field: 'from' },
      to: { type: DataType.STRING, field: 'to' },
      tokenId: { type: DataType.INTEGER, field: 'tokenId', unique: true },
      transactionHash: { type: DataType.STRING, field: 'transactionHash' },
    },
    {
      tableName: 'transferNFT',
      timestamps: false,
    }
  );

  return TransferNFT;
};
