import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { post, postId } from './post';
import type { post_has_chat, post_has_chatId } from './post_has_chat';
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

  // chat belongsToMany post via chat_id and post_id
  post_id_post_post_has_chats!: post[];
  getPost_id_post_post_has_chats!: Sequelize.BelongsToManyGetAssociationsMixin<post>;
  setPost_id_post_post_has_chats!: Sequelize.BelongsToManySetAssociationsMixin<post, postId>;
  addPost_id_post_post_has_chat!: Sequelize.BelongsToManyAddAssociationMixin<post, postId>;
  addPost_id_post_post_has_chats!: Sequelize.BelongsToManyAddAssociationsMixin<post, postId>;
  createPost_id_post_post_has_chat!: Sequelize.BelongsToManyCreateAssociationMixin<post>;
  removePost_id_post_post_has_chat!: Sequelize.BelongsToManyRemoveAssociationMixin<post, postId>;
  removePost_id_post_post_has_chats!: Sequelize.BelongsToManyRemoveAssociationsMixin<post, postId>;
  hasPost_id_post_post_has_chat!: Sequelize.BelongsToManyHasAssociationMixin<post, postId>;
  hasPost_id_post_post_has_chats!: Sequelize.BelongsToManyHasAssociationsMixin<post, postId>;
  countPost_id_post_post_has_chats!: Sequelize.BelongsToManyCountAssociationsMixin;
  // chat hasMany post_has_chat via chat_id
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
