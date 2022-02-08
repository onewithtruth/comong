import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { user, userId } from './user';
export interface refreshtokenAttributes {
    id: number;
    refreshtoken?: string;
    exp?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    user_id: number;
}
export declare type refreshtokenPk = "id";
export declare type refreshtokenId = refreshtoken[refreshtokenPk];
export declare type refreshtokenOptionalAttributes = "id" | "refreshtoken" | "exp" | "createdAt" | "updatedAt";
export declare type refreshtokenCreationAttributes = Optional<refreshtokenAttributes, refreshtokenOptionalAttributes>;
export declare class refreshtoken extends Model<refreshtokenAttributes, refreshtokenCreationAttributes> implements refreshtokenAttributes {
    id: number;
    refreshtoken?: string;
    exp?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    user_id: number;
    user: user;
    getUser: Sequelize.BelongsToGetAssociationMixin<user>;
    setUser: Sequelize.BelongsToSetAssociationMixin<user, userId>;
    createUser: Sequelize.BelongsToCreateAssociationMixin<user>;
    static initModel(sequelize: Sequelize.Sequelize): typeof refreshtoken;
}
