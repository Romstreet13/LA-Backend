import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const MintNFT = sequelize.define(
    'MintNFT',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      // nftId: {
      //   type: DataType.STRING,
      //   field: 'nftId',
      // },
      subscriptionId: {
        type: DataType.INTEGER,
        field: 'subscriptionId',
        // unique: true,
      },
      userAddress: { type: DataType.STRING, field: 'userAddress' },
      userId: { type: DataType.INTEGER, field: 'userId' },
      merchant: { type: DataType.STRING, field: 'merchant' },
      transactionHash: { type: DataType.STRING, field: 'transactionHash' },
      status: { type: DataType.STRING, field: 'status' },
    },
    {
      tableName: 'mintNFT',
      timestamps: true,
    }
  );

  return MintNFT;
};
