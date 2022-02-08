import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat, chatId } from './chat';
import type { post, postId } from './post';

export interface post_has_chatAttributes {
  post_id: number;
  chat_id: number;
}

export type post_has_chatPk = "post_id" | "chat_id";
export type post_has_chatId = post_has_chat[post_has_chatPk];
export type post_has_chatCreationAttributes = post_has_chatAttributes;

export class post_has_chat extends Model<post_has_chatAttributes, post_has_chatCreationAttributes> implements post_has_chatAttributes {
  post_id!: number;
  chat_id!: number;

  // post_has_chat belongsTo chat via chat_id
  chat!: chat;
  getChat!: Sequelize.BelongsToGetAssociationMixin<chat>;
  setChat!: Sequelize.BelongsToSetAssociationMixin<chat, chatId>;
  createChat!: Sequelize.BelongsToCreateAssociationMixin<chat>;
  // post_has_chat belongsTo post via post_id
  post!: post;
  getPost!: Sequelize.BelongsToGetAssociationMixin<post>;
  setPost!: Sequelize.BelongsToSetAssociationMixin<post, postId>;
  createPost!: Sequelize.BelongsToCreateAssociationMixin<post>;

  static initModel(sequelize: Sequelize.Sequelize): typeof post_has_chat {
    return post_has_chat.init({
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    chat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chat',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'post_has_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
          { name: "chat_id" },
        ]
      },
      {
        name: "fk_post_has_chat_chat1_idx",
        using: "BTREE",
        fields: [
          { name: "chat_id" },
        ]
      },
      {
        name: "fk_post_has_chat_post1_idx",
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
    ]
  });
  }
}
