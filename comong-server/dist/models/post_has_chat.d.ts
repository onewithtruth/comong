import * as Sequelize from 'sequelize';
import { Model } from 'sequelize';
import type { chat, chatId } from './chat';
import type { post, postId } from './post';
export interface post_has_chatAttributes {
    post_id: number;
    chat_id: number;
}
export declare type post_has_chatPk = "post_id" | "chat_id";
export declare type post_has_chatId = post_has_chat[post_has_chatPk];
export declare type post_has_chatCreationAttributes = post_has_chatAttributes;
export declare class post_has_chat extends Model<post_has_chatAttributes, post_has_chatCreationAttributes> implements post_has_chatAttributes {
    post_id: number;
    chat_id: number;
    chat: chat;
    getChat: Sequelize.BelongsToGetAssociationMixin<chat>;
    setChat: Sequelize.BelongsToSetAssociationMixin<chat, chatId>;
    createChat: Sequelize.BelongsToCreateAssociationMixin<chat>;
    post: post;
    getPost: Sequelize.BelongsToGetAssociationMixin<post>;
    setPost: Sequelize.BelongsToSetAssociationMixin<post, postId>;
    createPost: Sequelize.BelongsToCreateAssociationMixin<post>;
    static initModel(sequelize: Sequelize.Sequelize): typeof post_has_chat;
}
