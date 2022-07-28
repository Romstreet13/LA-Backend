import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const Logs = sequelize.define(
    'Logs',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      method: { type: DataType.STRING, field: 'method' },
      nftId: { type: DataType.INTEGER, field: 'nftId' },
      userAddress: { type: DataType.STRING, field: 'userAddress' },
      userId: { type: DataType.INTEGER, field: 'userId' },
      merchantId: { type: DataType.INTEGER, field: 'merchantId' },
      message: { type: DataType.STRING, field: 'message' },
      transactionHash: { type: DataType.STRING, field: 'transactionHash' },
      status: { type: DataType.STRING, field: 'status' },
      isActivated: { type: DataType.BOOLEAN, field: 'isActivated' },
    },
    {
      tableName: 'logs',
      timestamps: false,
    }
  );

  return Logs;
};
