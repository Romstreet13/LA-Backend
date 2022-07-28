import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const Merchant = sequelize.define(
    'Merchant',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      merchantId: { type: DataType.INTEGER, field: 'merchantId' },
      merchantName: { type: DataType.STRING, field: 'merchant' },
      merchantUrl: { type: DataType.STRING, field: 'url' },
    },
    {
      tableName: 'merchant',
      timestamps: false,
    }
  );

  return Merchant;
};
