import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bookmark, bookmarkId } from './bookmark';
import type { category, categoryId } from './category';
import type { category_has_user, category_has_userId } from './category_has_user';
import type { chat, chatId } from './chat';
import type { chat_has_user, chat_has_userId } from './chat_has_user';
import type { item, itemId } from './item';
import type { item_review, item_reviewId } from './item_review';
import type { keyword, keywordId } from './keyword';
import type { notification, notificationId } from './notification';
import type { order, orderId } from './order';
import type { order_detail, order_detailId } from './order_detail';
import type { refreshtoken, refreshtokenId } from './refreshtoken';
import type { replace_refund, replace_refundId } from './replace_refund';
import type { user_address, user_addressId } from './user_address';
import type { user_payment, user_paymentId } from './user_payment';

export interface userAttributes {
  id: number;
  name?: string;
  storename?: string;
  email: string;
  mobile?: string;
  password?: string;
  gender?: number;
  birthday?: string;
  role: number;
  myimg_src?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "id" | "name" | "storename" | "mobile" | "password" | "gender" | "birthday" | "role" | "myimg_src" | "createdAt" | "updatedAt";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  name?: string;
  storename?: string;
  email!: string;
  mobile?: string;
  password?: string;
  gender?: number;
  birthday?: string;
  role!: number;
  myimg_src?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // user hasMany bookmark via user_id
  bookmarks!: bookmark[];
  getBookmarks!: Sequelize.HasManyGetAssociationsMixin<bookmark>;
  setBookmarks!: Sequelize.HasManySetAssociationsMixin<bookmark, bookmarkId>;
  addBookmark!: Sequelize.HasManyAddAssociationMixin<bookmark, bookmarkId>;
  addBookmarks!: Sequelize.HasManyAddAssociationsMixin<bookmark, bookmarkId>;
  createBookmark!: Sequelize.HasManyCreateAssociationMixin<bookmark>;
  removeBookmark!: Sequelize.HasManyRemoveAssociationMixin<bookmark, bookmarkId>;
  removeBookmarks!: Sequelize.HasManyRemoveAssociationsMixin<bookmark, bookmarkId>;
  hasBookmark!: Sequelize.HasManyHasAssociationMixin<bookmark, bookmarkId>;
  hasBookmarks!: Sequelize.HasManyHasAssociationsMixin<bookmark, bookmarkId>;
  countBookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // user belongsToMany category via user_id and category_id
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
  // user hasMany category_has_user via user_id
  category_has_users!: category_has_user[];
  getCategory_has_users!: Sequelize.HasManyGetAssociationsMixin<category_has_user>;
  setCategory_has_users!: Sequelize.HasManySetAssociationsMixin<category_has_user, category_has_userId>;
  addCategory_has_user!: Sequelize.HasManyAddAssociationMixin<category_has_user, category_has_userId>;
  addCategory_has_users!: Sequelize.HasManyAddAssociationsMixin<category_has_user, category_has_userId>;
  createCategory_has_user!: Sequelize.HasManyCreateAssociationMixin<category_has_user>;
  removeCategory_has_user!: Sequelize.HasManyRemoveAssociationMixin<category_has_user, category_has_userId>;
  removeCategory_has_users!: Sequelize.HasManyRemoveAssociationsMixin<category_has_user, category_has_userId>;
  hasCategory_has_user!: Sequelize.HasManyHasAssociationMixin<category_has_user, category_has_userId>;
  hasCategory_has_users!: Sequelize.HasManyHasAssociationsMixin<category_has_user, category_has_userId>;
  countCategory_has_users!: Sequelize.HasManyCountAssociationsMixin;
  // user belongsToMany chat via user_id and chat_id
  chat_id_chat_chat_has_users!: chat[];
  getChat_id_chat_chat_has_users!: Sequelize.BelongsToManyGetAssociationsMixin<chat>;
  setChat_id_chat_chat_has_users!: Sequelize.BelongsToManySetAssociationsMixin<chat, chatId>;
  addChat_id_chat_chat_has_user!: Sequelize.BelongsToManyAddAssociationMixin<chat, chatId>;
  addChat_id_chat_chat_has_users!: Sequelize.BelongsToManyAddAssociationsMixin<chat, chatId>;
  createChat_id_chat_chat_has_user!: Sequelize.BelongsToManyCreateAssociationMixin<chat>;
  removeChat_id_chat_chat_has_user!: Sequelize.BelongsToManyRemoveAssociationMixin<chat, chatId>;
  removeChat_id_chat_chat_has_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<chat, chatId>;
  hasChat_id_chat_chat_has_user!: Sequelize.BelongsToManyHasAssociationMixin<chat, chatId>;
  hasChat_id_chat_chat_has_users!: Sequelize.BelongsToManyHasAssociationsMixin<chat, chatId>;
  countChat_id_chat_chat_has_users!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user hasMany chat_has_user via user_id
  chat_has_users!: chat_has_user[];
  getChat_has_users!: Sequelize.HasManyGetAssociationsMixin<chat_has_user>;
  setChat_has_users!: Sequelize.HasManySetAssociationsMixin<chat_has_user, chat_has_userId>;
  addChat_has_user!: Sequelize.HasManyAddAssociationMixin<chat_has_user, chat_has_userId>;
  addChat_has_users!: Sequelize.HasManyAddAssociationsMixin<chat_has_user, chat_has_userId>;
  createChat_has_user!: Sequelize.HasManyCreateAssociationMixin<chat_has_user>;
  removeChat_has_user!: Sequelize.HasManyRemoveAssociationMixin<chat_has_user, chat_has_userId>;
  removeChat_has_users!: Sequelize.HasManyRemoveAssociationsMixin<chat_has_user, chat_has_userId>;
  hasChat_has_user!: Sequelize.HasManyHasAssociationMixin<chat_has_user, chat_has_userId>;
  hasChat_has_users!: Sequelize.HasManyHasAssociationsMixin<chat_has_user, chat_has_userId>;
  countChat_has_users!: Sequelize.HasManyCountAssociationsMixin;
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
  // user hasMany item_review via user_id
  item_reviews!: item_review[];
  getItem_reviews!: Sequelize.HasManyGetAssociationsMixin<item_review>;
  setItem_reviews!: Sequelize.HasManySetAssociationsMixin<item_review, item_reviewId>;
  addItem_review!: Sequelize.HasManyAddAssociationMixin<item_review, item_reviewId>;
  addItem_reviews!: Sequelize.HasManyAddAssociationsMixin<item_review, item_reviewId>;
  createItem_review!: Sequelize.HasManyCreateAssociationMixin<item_review>;
  removeItem_review!: Sequelize.HasManyRemoveAssociationMixin<item_review, item_reviewId>;
  removeItem_reviews!: Sequelize.HasManyRemoveAssociationsMixin<item_review, item_reviewId>;
  hasItem_review!: Sequelize.HasManyHasAssociationMixin<item_review, item_reviewId>;
  hasItem_reviews!: Sequelize.HasManyHasAssociationsMixin<item_review, item_reviewId>;
  countItem_reviews!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany keyword via user_id
  keywords!: keyword[];
  getKeywords!: Sequelize.HasManyGetAssociationsMixin<keyword>;
  setKeywords!: Sequelize.HasManySetAssociationsMixin<keyword, keywordId>;
  addKeyword!: Sequelize.HasManyAddAssociationMixin<keyword, keywordId>;
  addKeywords!: Sequelize.HasManyAddAssociationsMixin<keyword, keywordId>;
  createKeyword!: Sequelize.HasManyCreateAssociationMixin<keyword>;
  removeKeyword!: Sequelize.HasManyRemoveAssociationMixin<keyword, keywordId>;
  removeKeywords!: Sequelize.HasManyRemoveAssociationsMixin<keyword, keywordId>;
  hasKeyword!: Sequelize.HasManyHasAssociationMixin<keyword, keywordId>;
  hasKeywords!: Sequelize.HasManyHasAssociationsMixin<keyword, keywordId>;
  countKeywords!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany notification via user_id
  notifications!: notification[];
  getNotifications!: Sequelize.HasManyGetAssociationsMixin<notification>;
  setNotifications!: Sequelize.HasManySetAssociationsMixin<notification, notificationId>;
  addNotification!: Sequelize.HasManyAddAssociationMixin<notification, notificationId>;
  addNotifications!: Sequelize.HasManyAddAssociationsMixin<notification, notificationId>;
  createNotification!: Sequelize.HasManyCreateAssociationMixin<notification>;
  removeNotification!: Sequelize.HasManyRemoveAssociationMixin<notification, notificationId>;
  removeNotifications!: Sequelize.HasManyRemoveAssociationsMixin<notification, notificationId>;
  hasNotification!: Sequelize.HasManyHasAssociationMixin<notification, notificationId>;
  hasNotifications!: Sequelize.HasManyHasAssociationsMixin<notification, notificationId>;
  countNotifications!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany order via user_id
  orders!: order[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<order>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<order, orderId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<order, orderId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<order, orderId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<order>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<order, orderId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<order, orderId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<order, orderId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<order, orderId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany order_detail via user_id
  order_details!: order_detail[];
  getOrder_details!: Sequelize.HasManyGetAssociationsMixin<order_detail>;
  setOrder_details!: Sequelize.HasManySetAssociationsMixin<order_detail, order_detailId>;
  addOrder_detail!: Sequelize.HasManyAddAssociationMixin<order_detail, order_detailId>;
  addOrder_details!: Sequelize.HasManyAddAssociationsMixin<order_detail, order_detailId>;
  createOrder_detail!: Sequelize.HasManyCreateAssociationMixin<order_detail>;
  removeOrder_detail!: Sequelize.HasManyRemoveAssociationMixin<order_detail, order_detailId>;
  removeOrder_details!: Sequelize.HasManyRemoveAssociationsMixin<order_detail, order_detailId>;
  hasOrder_detail!: Sequelize.HasManyHasAssociationMixin<order_detail, order_detailId>;
  hasOrder_details!: Sequelize.HasManyHasAssociationsMixin<order_detail, order_detailId>;
  countOrder_details!: Sequelize.HasManyCountAssociationsMixin;
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
  // user hasMany replace_refund via user_id
  replace_refunds!: replace_refund[];
  getReplace_refunds!: Sequelize.HasManyGetAssociationsMixin<replace_refund>;
  setReplace_refunds!: Sequelize.HasManySetAssociationsMixin<replace_refund, replace_refundId>;
  addReplace_refund!: Sequelize.HasManyAddAssociationMixin<replace_refund, replace_refundId>;
  addReplace_refunds!: Sequelize.HasManyAddAssociationsMixin<replace_refund, replace_refundId>;
  createReplace_refund!: Sequelize.HasManyCreateAssociationMixin<replace_refund>;
  removeReplace_refund!: Sequelize.HasManyRemoveAssociationMixin<replace_refund, replace_refundId>;
  removeReplace_refunds!: Sequelize.HasManyRemoveAssociationsMixin<replace_refund, replace_refundId>;
  hasReplace_refund!: Sequelize.HasManyHasAssociationMixin<replace_refund, replace_refundId>;
  hasReplace_refunds!: Sequelize.HasManyHasAssociationsMixin<replace_refund, replace_refundId>;
  countReplace_refunds!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_address via user_id
  user_addresses!: user_address[];
  getUser_addresses!: Sequelize.HasManyGetAssociationsMixin<user_address>;
  setUser_addresses!: Sequelize.HasManySetAssociationsMixin<user_address, user_addressId>;
  addUser_address!: Sequelize.HasManyAddAssociationMixin<user_address, user_addressId>;
  addUser_addresses!: Sequelize.HasManyAddAssociationsMixin<user_address, user_addressId>;
  createUser_address!: Sequelize.HasManyCreateAssociationMixin<user_address>;
  removeUser_address!: Sequelize.HasManyRemoveAssociationMixin<user_address, user_addressId>;
  removeUser_addresses!: Sequelize.HasManyRemoveAssociationsMixin<user_address, user_addressId>;
  hasUser_address!: Sequelize.HasManyHasAssociationMixin<user_address, user_addressId>;
  hasUser_addresses!: Sequelize.HasManyHasAssociationsMixin<user_address, user_addressId>;
  countUser_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_payment via user_id
  user_payments!: user_payment[];
  getUser_payments!: Sequelize.HasManyGetAssociationsMixin<user_payment>;
  setUser_payments!: Sequelize.HasManySetAssociationsMixin<user_payment, user_paymentId>;
  addUser_payment!: Sequelize.HasManyAddAssociationMixin<user_payment, user_paymentId>;
  addUser_payments!: Sequelize.HasManyAddAssociationsMixin<user_payment, user_paymentId>;
  createUser_payment!: Sequelize.HasManyCreateAssociationMixin<user_payment>;
  removeUser_payment!: Sequelize.HasManyRemoveAssociationMixin<user_payment, user_paymentId>;
  removeUser_payments!: Sequelize.HasManyRemoveAssociationsMixin<user_payment, user_paymentId>;
  hasUser_payment!: Sequelize.HasManyHasAssociationMixin<user_payment, user_paymentId>;
  hasUser_payments!: Sequelize.HasManyHasAssociationsMixin<user_payment, user_paymentId>;
  countUser_payments!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    storename: {
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
    gender: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    role: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    myimg_src: {
      type: DataTypes.STRING(100),
      allowNull: true
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
