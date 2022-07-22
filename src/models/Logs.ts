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
      title: {
        type: DataType.STRING,
        field: 'title',
      },
      subscriptionId: {
        type: DataType.INTEGER,
        field: 'subscriptionId',
      },
      userAddress: { type: DataType.STRING, field: 'userAddress' },
      userId: { type: DataType.INTEGER, field: 'userId' },
      merchant: { type: DataType.STRING, field: 'merchant' },
      message: {
        type: DataType.STRING,
        field: 'message',
      },
      status: { type: DataType.STRING, field: 'status' },
      transactionHash: { type: DataType.STRING, field: 'transactionHash' },
    },
    {
      tableName: 'logs',
      timestamps: true,
    }
  );

  return Logs;
};
