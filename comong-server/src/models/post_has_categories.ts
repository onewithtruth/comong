import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { categories, categoriesId } from './categories';
import type { post, postId } from './post';

export interface post_has_categoriesAttributes {
  post_id: number;
  categories_id: number;
}

export type post_has_categoriesPk = "post_id" | "categories_id";
export type post_has_categoriesId = post_has_categories[post_has_categoriesPk];
export type post_has_categoriesCreationAttributes = post_has_categoriesAttributes;

export class post_has_categories extends Model<post_has_categoriesAttributes, post_has_categoriesCreationAttributes> implements post_has_categoriesAttributes {
  post_id!: number;
  categories_id!: number;

  // post_has_categories belongsTo categories via categories_id
  category!: categories;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<categories>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<categories, categoriesId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<categories>;
  // post_has_categories belongsTo post via post_id
  post!: post;
  getPost!: Sequelize.BelongsToGetAssociationMixin<post>;
  setPost!: Sequelize.BelongsToSetAssociationMixin<post, postId>;
  createPost!: Sequelize.BelongsToCreateAssociationMixin<post>;

  static initModel(sequelize: Sequelize.Sequelize): typeof post_has_categories {
    return post_has_categories.init({
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    categories_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'post_has_categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
          { name: "categories_id" },
        ]
      },
      {
        name: "fk_post_has_categories_categories1_idx",
        using: "BTREE",
        fields: [
          { name: "categories_id" },
        ]
      },
      {
        name: "fk_post_has_categories_post1_idx",
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
    ]
  });
  }
}
