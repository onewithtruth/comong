import * as Sequelize from 'sequelize';
import { Model } from 'sequelize';
import type { categories, categoriesId } from './categories';
import type { post, postId } from './post';
export interface post_has_categoriesAttributes {
    post_id: number;
    categories_id: number;
}
export declare type post_has_categoriesPk = "post_id" | "categories_id";
export declare type post_has_categoriesId = post_has_categories[post_has_categoriesPk];
export declare type post_has_categoriesCreationAttributes = post_has_categoriesAttributes;
export declare class post_has_categories extends Model<post_has_categoriesAttributes, post_has_categoriesCreationAttributes> implements post_has_categoriesAttributes {
    post_id: number;
    categories_id: number;
    category: categories;
    getCategory: Sequelize.BelongsToGetAssociationMixin<categories>;
    setCategory: Sequelize.BelongsToSetAssociationMixin<categories, categoriesId>;
    createCategory: Sequelize.BelongsToCreateAssociationMixin<categories>;
    post: post;
    getPost: Sequelize.BelongsToGetAssociationMixin<post>;
    setPost: Sequelize.BelongsToSetAssociationMixin<post, postId>;
    createPost: Sequelize.BelongsToCreateAssociationMixin<post>;
    static initModel(sequelize: Sequelize.Sequelize): typeof post_has_categories;
}
