import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat, chatId } from './chat';
import type { item, itemId } from './item';
import type { refreshtoken, refreshtokenId } from './refreshtoken';

export interface userAttributes {
  id: number;
  nickname?: string;
  email: string;
  mobile?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  address01?: string;
  address02?: string;
  gender?: string;
  birthday?: string;
  role: string;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "id" | "nickname" | "mobile" | "password" | "createdAt" | "updatedAt" | "address01" | "address02" | "gender" | "birthday" | "role";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  nickname?: string;
  email!: string;
  mobile?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  address01?: string;
  address02?: string;
  gender?: string;
  birthday?: string;
  role!: string;

  // user hasMany chat via user_id
  chats!: chat[];
  getChats!: Sequelize.HasManyGetAssociationsMixin<chat>;
  setChats!: Sequelize.HasManySetAssociationsMixin<chat, chatId>;
  addChat!: Sequelize.HasManyAddAssociationMixin<chat, chatId>;
  addChats!: Sequelize.HasManyAddAssociationsMixin<chat, chatId>;
  createChat!: Sequelize.HasManyCreateAssociationMixin<chat>;
  removeChat!: Sequelize.HasManyRemoveAssociationMixin<chat, chatId>;
  removeChats!: Sequelize.HasManyRemoveAssociationsMixin<chat, chatId>;
  hasChat!: Sequelize.HasManyHasAssociationMixin<chat, chatId>;
  hasChats!: Sequelize.HasManyHasAssociationsMixin<chat, chatId>;
  countChats!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany item via user_id
  items!: item[];
  getItems!: Sequelize.HasManyGetAssociationsMixin<item>;
  setItems!: Sequelize.HasManySetAssociationsMixin<item, itemId>;
  addItem!: Sequelize.HasManyAddAssociationMixin<item, itemId>;
  addItems!: Sequelize.HasManyAddAssociationsMixin<item, itemId>;
  createItem!: Sequelize.HasManyCreateAssociationMixin<item>;
  removeItem!: Sequelize.HasManyRemoveAssociationMixin<item, itemId>;
  removeItems!: Sequelize.HasManyRemoveAssociationsMixin<item, itemId>;
  hasItem!: Sequelize.HasManyHasAssociationMixin<item, itemId>;
  hasItems!: Sequelize.HasManyHasAssociationsMixin<item, itemId>;
  countItems!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany refreshtoken via user_id
  refreshtokens!: refreshtoken[];
  getRefreshtokens!: Sequelize.HasManyGetAssociationsMixin<refreshtoken>;
  setRefreshtokens!: Sequelize.HasManySetAssociationsMixin<refreshtoken, refreshtokenId>;
  addRefreshtoken!: Sequelize.HasManyAddAssociationMixin<refreshtoken, refreshtokenId>;
  addRefreshtokens!: Sequelize.HasManyAddAssociationsMixin<refreshtoken, refreshtokenId>;
  createRefreshtoken!: Sequelize.HasManyCreateAssociationMixin<refreshtoken>;
  removeRefreshtoken!: Sequelize.HasManyRemoveAssociationMixin<refreshtoken, refreshtokenId>;
  removeRefreshtokens!: Sequelize.HasManyRemoveAssociationsMixin<refreshtoken, refreshtokenId>;
  hasRefreshtoken!: Sequelize.HasManyHasAssociationMixin<refreshtoken, refreshtokenId>;
  hasRefreshtokens!: Sequelize.HasManyHasAssociationsMixin<refreshtoken, refreshtokenId>;
  countRefreshtokens!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    address01: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address02: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'user',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
