"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.user = exports.refreshtoken = exports.post_has_chat = exports.post_has_categories = exports.post = exports.chat = exports.categories = void 0;
const categories_1 = require("./categories");
Object.defineProperty(exports, "categories", { enumerable: true, get: function () { return categories_1.categories; } });
const chat_1 = require("./chat");
Object.defineProperty(exports, "chat", { enumerable: true, get: function () { return chat_1.chat; } });
const post_1 = require("./post");
Object.defineProperty(exports, "post", { enumerable: true, get: function () { return post_1.post; } });
const post_has_categories_1 = require("./post_has_categories");
Object.defineProperty(exports, "post_has_categories", { enumerable: true, get: function () { return post_has_categories_1.post_has_categories; } });
const post_has_chat_1 = require("./post_has_chat");
Object.defineProperty(exports, "post_has_chat", { enumerable: true, get: function () { return post_has_chat_1.post_has_chat; } });
const refreshtoken_1 = require("./refreshtoken");
Object.defineProperty(exports, "refreshtoken", { enumerable: true, get: function () { return refreshtoken_1.refreshtoken; } });
const user_1 = require("./user");
Object.defineProperty(exports, "user", { enumerable: true, get: function () { return user_1.user; } });
function initModels(sequelize) {
    const categories = categories_1.categories.initModel(sequelize);
    const chat = chat_1.chat.initModel(sequelize);
    const post = post_1.post.initModel(sequelize);
    const post_has_categories = post_has_categories_1.post_has_categories.initModel(sequelize);
    const post_has_chat = post_has_chat_1.post_has_chat.initModel(sequelize);
    const refreshtoken = refreshtoken_1.refreshtoken.initModel(sequelize);
    const user = user_1.user.initModel(sequelize);
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
exports.initModels = initModels;
//# sourceMappingURL=init-models.js.map