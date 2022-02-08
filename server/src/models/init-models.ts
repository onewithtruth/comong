import type { Sequelize } from "sequelize";
import { category as _category } from "./category";
import type { categoryAttributes, categoryCreationAttributes } from "./category";
import { chat as _chat } from "./chat";
import type { chatAttributes, chatCreationAttributes } from "./chat";
import { chat_has_item as _chat_has_item } from "./chat_has_item";
import type { chat_has_itemAttributes, chat_has_itemCreationAttributes } from "./chat_has_item";
import { item as _item } from "./item";
import type { itemAttributes, itemCreationAttributes } from "./item";
import { item_has_category as _item_has_category } from "./item_has_category";
import type { item_has_categoryAttributes, item_has_categoryCreationAttributes } from "./item_has_category";
import { refreshtoken as _refreshtoken } from "./refreshtoken";
import type { refreshtokenAttributes, refreshtokenCreationAttributes } from "./refreshtoken";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";

export {
  _category as category,
  _chat as chat,
  _chat_has_item as chat_has_item,
  _item as item,
  _item_has_category as item_has_category,
  _refreshtoken as refreshtoken,
  _user as user,
};

export type {
  categoryAttributes,
  categoryCreationAttributes,
  chatAttributes,
  chatCreationAttributes,
  chat_has_itemAttributes,
  chat_has_itemCreationAttributes,
  itemAttributes,
  itemCreationAttributes,
  item_has_categoryAttributes,
  item_has_categoryCreationAttributes,
  refreshtokenAttributes,
  refreshtokenCreationAttributes,
  userAttributes,
  userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const category = _category.initModel(sequelize);
  const chat = _chat.initModel(sequelize);
  const chat_has_item = _chat_has_item.initModel(sequelize);
  const item = _item.initModel(sequelize);
  const item_has_category = _item_has_category.initModel(sequelize);
  const refreshtoken = _refreshtoken.initModel(sequelize);
  const user = _user.initModel(sequelize);

  category.belongsToMany(item, { as: 'item_id_item_item_has_categories', through: item_has_category, foreignKey: "category_id", otherKey: "item_id" });
  chat.belongsToMany(item, { as: 'item_id_items', through: chat_has_item, foreignKey: "chat_id", otherKey: "item_id" });
  item.belongsToMany(category, { as: 'category_id_categories', through: item_has_category, foreignKey: "item_id", otherKey: "category_id" });
  item.belongsToMany(chat, { as: 'chat_id_chats', through: chat_has_item, foreignKey: "item_id", otherKey: "chat_id" });
  item_has_category.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(item_has_category, { as: "item_has_categories", foreignKey: "category_id"});
  chat_has_item.belongsTo(chat, { as: "chat", foreignKey: "chat_id"});
  chat.hasMany(chat_has_item, { as: "chat_has_items", foreignKey: "chat_id"});
  chat_has_item.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(chat_has_item, { as: "chat_has_items", foreignKey: "item_id"});
  item_has_category.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(item_has_category, { as: "item_has_categories", foreignKey: "item_id"});
  chat.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(chat, { as: "chats", foreignKey: "user_id"});
  item.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(item, { as: "items", foreignKey: "user_id"});
  refreshtoken.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(refreshtoken, { as: "refreshtokens", foreignKey: "user_id"});

  return {
    category: category,
    chat: chat,
    chat_has_item: chat_has_item,
    item: item,
    item_has_category: item_has_category,
    refreshtoken: refreshtoken,
    user: user,
  };
}
