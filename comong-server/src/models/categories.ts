import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { post, postId } from './post';
import type { post_has_categories, post_has_categoriesId } from './post_has_categories';

export interface categoriesAttributes {
  id: number;
  category?: string;
}

export type categoriesPk = "id";
export type categoriesId = categories[categoriesPk];
export type categoriesOptionalAttributes = "id" | "category";
export type categoriesCreationAttributes = Optional<categoriesAttributes, categoriesOptionalAttributes>;

export class categories extends Model<categoriesAttributes, categoriesCreationAttributes> implements categoriesAttributes {
  id!: number;
  category?: string;

  // categories belongsToMany post via categories_id and post_id
  post_id_posts!: post[];
  getPost_id_posts!: Sequelize.BelongsToManyGetAssociationsMixin<post>;
  setPost_id_posts!: Sequelize.BelongsToManySetAssociationsMixin<post, postId>;
  addPost_id_post!: Sequelize.BelongsToManyAddAssociationMixin<post, postId>;
  addPost_id_posts!: Sequelize.BelongsToManyAddAssociationsMixin<post, postId>;
  createPost_id_post!: Sequelize.BelongsToManyCreateAssociationMixin<post>;
  removePost_id_post!: Sequelize.BelongsToManyRemoveAssociationMixin<post, postId>;
  removePost_id_posts!: Sequelize.BelongsToManyRemoveAssociationsMixin<post, postId>;
  hasPost_id_post!: Sequelize.BelongsToManyHasAssociationMixin<post, postId>;
  hasPost_id_posts!: Sequelize.BelongsToManyHasAssociationsMixin<post, postId>;
  countPost_id_posts!: Sequelize.BelongsToManyCountAssociationsMixin;
  // categories hasMany post_has_categories via categories_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof categories {
    return categories.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
