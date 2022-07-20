import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const NFT = sequelize.define(
    'NFT',
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
        type: DataType.INTEGER,
        field: 'nftId',
      },
      transactionHash: { type: DataType.STRING, field: 'transactionHash' },
      userAddress: { type: DataType.STRING, field: 'userAddress' },
    },
    {
      tableName: 'nft',
      timestamps: true,
    }
  );

  return NFT;
};
