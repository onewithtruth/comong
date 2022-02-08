import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { categories, categoriesId } from './categories';
import type { chat, chatId } from './chat';
import type { post_has_categories, post_has_categoriesId } from './post_has_categories';
import type { post_has_chat, post_has_chatId } from './post_has_chat';
import type { user, userId } from './user';

export interface postAttributes {
  id: number;
  title: string;
  contents?: string;
  price?: string;
  createdAt?: Date;
  updatedAt?: Date;
  image_src?: string;
  user_id: number;
}

export type postPk = "id";
export type postId = post[postPk];
export type postOptionalAttributes = "id" | "contents" | "price" | "createdAt" | "updatedAt" | "image_src";
export type postCreationAttributes = Optional<postAttributes, postOptionalAttributes>;

export class post extends Model<postAttributes, postCreationAttributes> implements postAttributes {
  id!: number;
  title!: string;
  contents?: string;
  price?: string;
  createdAt?: Date;
  updatedAt?: Date;
  image_src?: string;
  user_id!: number;

  // post belongsToMany categories via post_id and categories_id
  categories_id_categories!: categories[];
  getCategories_id_categories!: Sequelize.BelongsToManyGetAssociationsMixin<categories>;
  setCategories_id_categories!: Sequelize.BelongsToManySetAssociationsMixin<categories, categoriesId>;
  addCategories_id_category!: Sequelize.BelongsToManyAddAssociationMixin<categories, categoriesId>;
  addCategories_id_categories!: Sequelize.BelongsToManyAddAssociationsMixin<categories, categoriesId>;
  createCategories_id_category!: Sequelize.BelongsToManyCreateAssociationMixin<categories>;
  removeCategories_id_category!: Sequelize.BelongsToManyRemoveAssociationMixin<categories, categoriesId>;
  removeCategories_id_categories!: Sequelize.BelongsToManyRemoveAssociationsMixin<categories, categoriesId>;
  hasCategories_id_category!: Sequelize.BelongsToManyHasAssociationMixin<categories, categoriesId>;
  hasCategories_id_categories!: Sequelize.BelongsToManyHasAssociationsMixin<categories, categoriesId>;
  countCategories_id_categories!: Sequelize.BelongsToManyCountAssociationsMixin;
  // post belongsToMany chat via post_id and chat_id
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
  // post hasMany post_has_categories via post_id
  post_has_categories!: post_has_categories[];
  getPost_has_categories!: Sequelize.HasManyGetAssociationsMixin<post_has_categories>;
  setPost_has_categories!: Sequelize.HasManySetAssociationsMixin<post_has_categories, post_has_categoriesId>;
  addPost_has_category!: Sequelize.HasManyAddAssociationMixin<post_has_categories, post_has_categoriesId>;
  addPost_has_categories!: Sequelize.HasManyAddAssociationsMixin<post_has_categories, post_has_categoriesId>;
  createPost_has_category!: Sequelize.HasManyCreateAssociationMixin<post_has_categories>;
  removePost_has_category!: Sequelize.HasManyRemoveAssociationMixin<post_has_categories, post_has_categoriesId>;
  removePost_has_categories!: Sequelize.HasManyRemoveAssociationsMixin<post_has_categories, post_has_categoriesId>;
  hasPost_has_category!: Sequelize.HasManyHasAssociationMixin<post_has_categories, post_has_categoriesId>;
  hasPost_has_categories!: Sequelize.HasManyHasAssociationsMixin<post_has_categories, post_has_categoriesId>;
  countPost_has_categories!: Sequelize.HasManyCountAssociationsMixin;
  // post hasMany post_has_chat via post_id
  post_has_chats!: post_has_chat[];
  getPost_has_chats!: Sequelize.HasManyGetAssociationsMixin<post_has_chat>;
  setPost_has_chats!: Sequelize.HasManySetAssociationsMixin<post_has_chat, post_has_chatId>;
  addPost_has_chat!: Sequelize.HasManyAddAssociationMixin<post_has_chat, post_has_chatId>;
  addPost_has_chats!: Sequelize.HasManyAddAssociationsMixin<post_has_chat, post_has_chatId>;
  createPost_has_chat!: Sequelize.HasManyCreateAssociationMixin<post_has_chat>;
  removePost_has_chat!: Sequelize.HasManyRemoveAssociationMixin<post_has_chat, post_has_chatId>;
  removePost_has_chats!: Sequelize.HasManyRemoveAssociationsMixin<post_has_chat, post_has_chatId>;
  hasPost_has_chat!: Sequelize.HasManyHasAssociationMixin<post_has_chat, post_has_chatId>;
  hasPost_has_chats!: Sequelize.HasManyHasAssociationsMixin<post_has_chat, post_has_chatId>;
  countPost_has_chats!: Sequelize.HasManyCountAssociationsMixin;
  // post belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof post {
    return post.init({
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
    tableName: 'post',
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
