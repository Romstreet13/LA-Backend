import DataType from 'sequelize';

export interface Model {
	define(
		arg0: string, 
		arg1: any,
		// arg1: { 
		// 	id: { type: DataType.IntegerDataTypeConstructor; unique: boolean; primaryKey: boolean; autoIncrement: boolean; allowNull: boolean; field?: string; }; 
		// 	name?: { type: DataType.StringDataTypeConstructor; field?: string; unique?: boolean; allowNull?: boolean; }; 
		// 	address?: { type: DataType.StringDataTypeConstructor; field?: string; };
		// 	chainId?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// 	fullName?: { type: DataType.StringDataTypeConstructor; field?: string; };
		// 	idSellAsset?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// 	idBuyAsset?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// 	idPerson?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// 	limits?: { type: DataType.FloatDataTypeConstructor; field?: string; };
		// 	rate?: { type: DataType.FloatDataTypeConstructor; field?: string; };
		// 	minAmount?: { type: DataType.FloatDataTypeConstructor; field?: string; };
		// 	maxAmount?: { type: DataType.FloatDataTypeConstructor; field?: string; };
		// 	price?: { type: DataType.FloatDataTypeConstructor; field?: string; };
		// 	userTokenAddress?: { type: DataType.StringDataTypeConstructor; field?: string; };
		// 	nonce?: { type: DataType.IntegerDataTypeConstructor; allowNull: boolean; field?: string; defaultValue: any; };
		// 	publicAddress?: { type: DataType.StringDataTypeConstructor; allowNull: boolean; unique: boolean, validate?: any; field?: string};
		// 	sellAssetAddress?: { type: DataType.StringDataTypeConstructor; field?: string; };
		// 	buyAssetAddress?: { type: DataType.StringDataTypeConstructor; field?: string; };
		// 	sellAmount?: { type: DataType.FloatDataTypeConstructor; field?: string; };
		// 	buyAmount?: { type: DataType.FloatDataTypeConstructor; field?: string; };
		// 	sendETHTo?: { type: DataType.StringDataTypeConstructor; field?: string; };
		// 	deadline?: { type: DataType.DateDataTypeConstructor; field?: string; };
		// 	idNotifyUser?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// 	idTradeContract?: { type: DataType.IntegerDataTypeConstructor; field?: string; };

		// 	// message
		// 	idSender?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// 	text?: { type: DataType.StringDataTypeConstructor; field?: string; };
		// 	time?: { type: DataType.DateDataTypeConstructor; field?: string; };
		// 	idChat?: { type: DataType.IntegerDataTypeConstructor; field?: string; references?: any };

		// 	//chat
		// 	idAdvert?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// 	idOwnerAdvert?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// 	idParticipant?: { type: DataType.IntegerDataTypeConstructor; field?: string; };
		// },
		arg2: { tableName?: string; freezeTableName?: boolean; timestamps?: boolean; }
        ): any;
}
