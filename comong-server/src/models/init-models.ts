import type { Sequelize } from 'sequelize';
import { categories as _categories } from './categories';
import type {
  categoriesAttributes,
  categoriesCreationAttributes,
} from './categories';
import { chat as _chat } from './chat';
import type { chatAttributes, chatCreationAttributes } from './chat';
import { post as _post } from './post';
import type { postAttributes, postCreationAttributes } from './post';
import { post_has_categories as _post_has_categories } from './post_has_categories';
import type {
  post_has_categoriesAttributes,
  post_has_categoriesCreationAttributes,
} from './post_has_categories';
import { post_has_chat as _post_has_chat } from './post_has_chat';
import type {
  post_has_chatAttributes,
  post_has_chatCreationAttributes,
} from './post_has_chat';
import { refreshtoken as _refreshtoken } from './refreshtoken';
import type {
  refreshtokenAttributes,
  refreshtokenCreationAttributes,
} from './refreshtoken';
import { user as _user } from './user';
import type { userAttributes, userCreationAttributes } from './user';

export {
  _categories as categories,
  _chat as chat,
  _post as post,
  _post_has_categories as post_has_categories,
  _post_has_chat as post_has_chat,
  _refreshtoken as refreshtoken,
  _user as user,
};

export type {
  categoriesAttributes,
  categoriesCreationAttributes,
  chatAttributes,
  chatCreationAttributes,
  postAttributes,
  postCreationAttributes,
  post_has_categoriesAttributes,
  post_has_categoriesCreationAttributes,
  post_has_chatAttributes,
  post_has_chatCreationAttributes,
  refreshtokenAttributes,
  refreshtokenCreationAttributes,
  userAttributes,
  userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const categories = _categories.initModel(sequelize);
  const chat = _chat.initModel(sequelize);
  const post = _post.initModel(sequelize);
  const post_has_categories = _post_has_categories.initModel(sequelize);
  const post_has_chat = _post_has_chat.initModel(sequelize);
  const refreshtoken = _refreshtoken.initModel(sequelize);
  const user = _user.initModel(sequelize);

  categories.belongsToMany(post, {
    as: 'post_id_posts',
    through: post_has_categories,
    foreignKey: 'categories_id',
    otherKey: 'post_id',
  });
  chat.belongsToMany(post, {
    as: 'post_id_post_post_has_chats',
    through: post_has_chat,
    foreignKey: 'chat_id',
    otherKey: 'post_id',
  });
  post.belongsToMany(categories, {
    as: 'categories_id_categories',
    through: post_has_categories,
    foreignKey: 'post_id',
    otherKey: 'categories_id',
  });
  post.belongsToMany(chat, {
    as: 'chat_id_chats',
    through: post_has_chat,
    foreignKey: 'post_id',
    otherKey: 'chat_id',
  });
  post_has_categories.belongsTo(categories, {
    as: 'category',
    foreignKey: 'categories_id',
  });
  categories.hasMany(post_has_categories, {
    as: 'post_has_categories',
    foreignKey: 'categories_id',
  });
  post_has_chat.belongsTo(chat, { as: 'chat', foreignKey: 'chat_id' });
  chat.hasMany(post_has_chat, { as: 'post_has_chats', foreignKey: 'chat_id' });
  post_has_categories.belongsTo(post, { as: 'post', foreignKey: 'post_id' });
  post.hasMany(post_has_categories, {
    as: 'post_has_categories',
    foreignKey: 'post_id',
  });
  post_has_chat.belongsTo(post, { as: 'post', foreignKey: 'post_id' });
  post.hasMany(post_has_chat, { as: 'post_has_chats', foreignKey: 'post_id' });
  chat.belongsTo(user, { as: 'user', foreignKey: 'user_id' });
  user.hasMany(chat, { as: 'chats', foreignKey: 'user_id' });
  post.belongsTo(user, { as: 'user', foreignKey: 'user_id' });
  user.hasMany(post, { as: 'posts', foreignKey: 'user_id' });
  refreshtoken.belongsTo(user, { as: 'user', foreignKey: 'user_id' });
  user.hasMany(refreshtoken, { as: 'refreshtokens', foreignKey: 'user_id' });

  return {
    categories: categories,
    chat: chat,
    post: post,
    post_has_categories: post_has_categories,
    post_has_chat: post_has_chat,
    refreshtoken: refreshtoken,
    user: user,
  };
}
