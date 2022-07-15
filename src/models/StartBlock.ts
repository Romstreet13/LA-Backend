import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const StartBlock = sequelize.define(
    'StartBlock',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      // contract: { type: DataType.STRING, field: 'contract' },
      label: {
        type: DataType.STRING,
        field: 'label',
        // defaultValue: 8100000,
      },
      blockNumber: {
        type: DataType.INTEGER,
        field: 'blockNumber',
        // defaultValue: 8100000,
      },
    },
    {
      tableName: 'startBlock',
      timestamps: false,
    }
  );
  return StartBlock;
};
