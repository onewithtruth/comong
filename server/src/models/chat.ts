import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat_has_item, chat_has_itemId } from './chat_has_item';
import type { item, itemId } from './item';
import type { user, userId } from './user';

export interface chatAttributes {
  id: number;
  text?: string;
  createdAt?: Date;
  updatedAt?: Date;
  room?: string;
  user_id: number;
}

export type chatPk = "id";
export type chatId = chat[chatPk];
export type chatOptionalAttributes = "id" | "text" | "createdAt" | "updatedAt" | "room";
export type chatCreationAttributes = Optional<chatAttributes, chatOptionalAttributes>;

export class chat extends Model<chatAttributes, chatCreationAttributes> implements chatAttributes {
  id!: number;
  text?: string;
  createdAt?: Date;
  updatedAt?: Date;
  room?: string;
  user_id!: number;

  // chat hasMany chat_has_item via chat_id
  chat_has_items!: chat_has_item[];
  getChat_has_items!: Sequelize.HasManyGetAssociationsMixin<chat_has_item>;
  setChat_has_items!: Sequelize.HasManySetAssociationsMixin<chat_has_item, chat_has_itemId>;
  addChat_has_item!: Sequelize.HasManyAddAssociationMixin<chat_has_item, chat_has_itemId>;
  addChat_has_items!: Sequelize.HasManyAddAssociationsMixin<chat_has_item, chat_has_itemId>;
  createChat_has_item!: Sequelize.HasManyCreateAssociationMixin<chat_has_item>;
  removeChat_has_item!: Sequelize.HasManyRemoveAssociationMixin<chat_has_item, chat_has_itemId>;
  removeChat_has_items!: Sequelize.HasManyRemoveAssociationsMixin<chat_has_item, chat_has_itemId>;
  hasChat_has_item!: Sequelize.HasManyHasAssociationMixin<chat_has_item, chat_has_itemId>;
  hasChat_has_items!: Sequelize.HasManyHasAssociationsMixin<chat_has_item, chat_has_itemId>;
  countChat_has_items!: Sequelize.HasManyCountAssociationsMixin;
  // chat belongsToMany item via chat_id and item_id
  item_id_items!: item[];
  getItem_id_items!: Sequelize.BelongsToManyGetAssociationsMixin<item>;
  setItem_id_items!: Sequelize.BelongsToManySetAssociationsMixin<item, itemId>;
  addItem_id_item!: Sequelize.BelongsToManyAddAssociationMixin<item, itemId>;
  addItem_id_items!: Sequelize.BelongsToManyAddAssociationsMixin<item, itemId>;
  createItem_id_item!: Sequelize.BelongsToManyCreateAssociationMixin<item>;
  removeItem_id_item!: Sequelize.BelongsToManyRemoveAssociationMixin<item, itemId>;
  removeItem_id_items!: Sequelize.BelongsToManyRemoveAssociationsMixin<item, itemId>;
  hasItem_id_item!: Sequelize.BelongsToManyHasAssociationMixin<item, itemId>;
  hasItem_id_items!: Sequelize.BelongsToManyHasAssociationsMixin<item, itemId>;
  countItem_id_items!: Sequelize.BelongsToManyCountAssociationsMixin;
  // chat belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof chat {
    return chat.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    room: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'chat',
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
      {
        name: "fk_chat_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
