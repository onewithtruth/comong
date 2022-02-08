import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { category, categoryId } from './category';
import type { chat, chatId } from './chat';
import type { chat_has_item, chat_has_itemId } from './chat_has_item';
import type { item_has_category, item_has_categoryId } from './item_has_category';
import type { user, userId } from './user';

export interface itemAttributes {
  id: number;
  title: string;
  contents?: string;
  price?: string;
  createdAt?: Date;
  updatedAt?: Date;
  image_src?: string;
  user_id: number;
}

export type itemPk = "id";
export type itemId = item[itemPk];
export type itemOptionalAttributes = "id" | "contents" | "price" | "createdAt" | "updatedAt" | "image_src";
export type itemCreationAttributes = Optional<itemAttributes, itemOptionalAttributes>;

export class item extends Model<itemAttributes, itemCreationAttributes> implements itemAttributes {
  id!: number;
  title!: string;
  contents?: string;
  price?: string;
  createdAt?: Date;
  updatedAt?: Date;
  image_src?: string;
  user_id!: number;

  // item belongsToMany category via item_id and category_id
  category_id_categories!: category[];
  getCategory_id_categories!: Sequelize.BelongsToManyGetAssociationsMixin<category>;
  setCategory_id_categories!: Sequelize.BelongsToManySetAssociationsMixin<category, categoryId>;
  addCategory_id_category!: Sequelize.BelongsToManyAddAssociationMixin<category, categoryId>;
  addCategory_id_categories!: Sequelize.BelongsToManyAddAssociationsMixin<category, categoryId>;
  createCategory_id_category!: Sequelize.BelongsToManyCreateAssociationMixin<category>;
  removeCategory_id_category!: Sequelize.BelongsToManyRemoveAssociationMixin<category, categoryId>;
  removeCategory_id_categories!: Sequelize.BelongsToManyRemoveAssociationsMixin<category, categoryId>;
  hasCategory_id_category!: Sequelize.BelongsToManyHasAssociationMixin<category, categoryId>;
  hasCategory_id_categories!: Sequelize.BelongsToManyHasAssociationsMixin<category, categoryId>;
  countCategory_id_categories!: Sequelize.BelongsToManyCountAssociationsMixin;
  // item belongsToMany chat via item_id and chat_id
  chat_id_chats!: chat[];
  getChat_id_chats!: Sequelize.BelongsToManyGetAssociationsMixin<chat>;
  setChat_id_chats!: Sequelize.BelongsToManySetAssociationsMixin<chat, chatId>;
  addChat_id_chat!: Sequelize.BelongsToManyAddAssociationMixin<chat, chatId>;
  addChat_id_chats!: Sequelize.BelongsToManyAddAssociationsMixin<chat, chatId>;
  createChat_id_chat!: Sequelize.BelongsToManyCreateAssociationMixin<chat>;
  removeChat_id_chat!: Sequelize.BelongsToManyRemoveAssociationMixin<chat, chatId>;
  removeChat_id_chats!: Sequelize.BelongsToManyRemoveAssociationsMixin<chat, chatId>;
  hasChat_id_chat!: Sequelize.BelongsToManyHasAssociationMixin<chat, chatId>;
  hasChat_id_chats!: Sequelize.BelongsToManyHasAssociationsMixin<chat, chatId>;
  countChat_id_chats!: Sequelize.BelongsToManyCountAssociationsMixin;
  // item hasMany chat_has_item via item_id
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
  // item hasMany item_has_category via item_id
  item_has_categories!: item_has_category[];
  getItem_has_categories!: Sequelize.HasManyGetAssociationsMixin<item_has_category>;
  setItem_has_categories!: Sequelize.HasManySetAssociationsMixin<item_has_category, item_has_categoryId>;
  addItem_has_category!: Sequelize.HasManyAddAssociationMixin<item_has_category, item_has_categoryId>;
  addItem_has_categories!: Sequelize.HasManyAddAssociationsMixin<item_has_category, item_has_categoryId>;
  createItem_has_category!: Sequelize.HasManyCreateAssociationMixin<item_has_category>;
  removeItem_has_category!: Sequelize.HasManyRemoveAssociationMixin<item_has_category, item_has_categoryId>;
  removeItem_has_categories!: Sequelize.HasManyRemoveAssociationsMixin<item_has_category, item_has_categoryId>;
  hasItem_has_category!: Sequelize.HasManyHasAssociationMixin<item_has_category, item_has_categoryId>;
  hasItem_has_categories!: Sequelize.HasManyHasAssociationsMixin<item_has_category, item_has_categoryId>;
  countItem_has_categories!: Sequelize.HasManyCountAssociationsMixin;
  // item belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof item {
    return item.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    image_src: {
      type: DataTypes.STRING(255),
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
    tableName: 'item',
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
        name: "fk_post_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
