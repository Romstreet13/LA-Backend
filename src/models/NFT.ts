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
      merchantId: { type: DataType.INTEGER, field: 'merchantId' },
      userAddress: { type: DataType.STRING, field: 'userAddress' },
      isActivated: { type: DataType.BOOLEAN, field: 'isActivated' },
    },
    {
      tableName: 'nft',
      timestamps: false,
    }
  );

  return NFT;
};
