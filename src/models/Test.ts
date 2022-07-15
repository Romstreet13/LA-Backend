import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const Test = sequelize.define(
    'Test',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      transactionHash: {
        type: DataType.STRING,
        field: 'transactionHash',
      },
      blockNumber: { type: DataType.INTEGER, field: 'blockNumber' },
      eggId: { type: DataType.STRING, field: 'eggId', unique: true },
      typeId: { type: DataType.STRING, field: 'typeId' },
      token: { type: DataType.STRING, field: 'token' },
      purchaseAmount: { type: DataType.STRING, field: 'purchaseAmount' },
      purchaseTime: { type: DataType.STRING, field: 'purchaseTime' },
    },
    {
      tableName: 'test',
      timestamps: false,
    }
  );

  return Test;
};
