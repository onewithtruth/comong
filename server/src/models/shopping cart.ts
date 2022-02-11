import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { order_detail, order_detailId } from './order_detail';
import type { order_detail_has_shopping cart, order_detail_has_shopping cartId } from './order_detail_has_shopping cart';
import type { user, userId } from './user';

export interface shopping cartAttributes {
  id: number;
  user_id: number;
}

export type shopping cartPk = "id";
export type shopping cartId = shopping cart[shopping cartPk];
export type shopping cartOptionalAttributes = "id";
export type shopping cartCreationAttributes = Optional<shopping cartAttributes, shopping cartOptionalAttributes>;

export class shopping cart extends Model<shopping cartAttributes, shopping cartCreationAttributes> implements shopping cartAttributes {
  id!: number;
  user_id!: number;

  // shopping cart belongsToMany order_detail via shopping cart_id and order_detail_id
  order_detail_id_order_detail_order_detail_has_shopping carts!: order_detail[];
  getOrder_detail_id_order_detail_order_detail_has_shopping carts!: Sequelize.BelongsToManyGetAssociationsMixin<order_detail>;
  setOrder_detail_id_order_detail_order_detail_has_shopping carts!: Sequelize.BelongsToManySetAssociationsMixin<order_detail, order_detailId>;
  addOrder_detail_id_order_detail_order_detail_has_shopping cart!: Sequelize.BelongsToManyAddAssociationMixin<order_detail, order_detailId>;
  addOrder_detail_id_order_detail_order_detail_has_shopping carts!: Sequelize.BelongsToManyAddAssociationsMixin<order_detail, order_detailId>;
  createOrder_detail_id_order_detail_order_detail_has_shopping cart!: Sequelize.BelongsToManyCreateAssociationMixin<order_detail>;
  removeOrder_detail_id_order_detail_order_detail_has_shopping cart!: Sequelize.BelongsToManyRemoveAssociationMixin<order_detail, order_detailId>;
  removeOrder_detail_id_order_detail_order_detail_has_shopping carts!: Sequelize.BelongsToManyRemoveAssociationsMixin<order_detail, order_detailId>;
  hasOrder_detail_id_order_detail_order_detail_has_shopping cart!: Sequelize.BelongsToManyHasAssociationMixin<order_detail, order_detailId>;
  hasOrder_detail_id_order_detail_order_detail_has_shopping carts!: Sequelize.BelongsToManyHasAssociationsMixin<order_detail, order_detailId>;
  countOrder_detail_id_order_detail_order_detail_has_shopping carts!: Sequelize.BelongsToManyCountAssociationsMixin;
  // shopping cart hasMany order_detail_has_shopping cart via shopping cart_id
  order_detail_has_shopping carts!: order_detail_has_shopping cart[];
  getOrder_detail_has_shopping carts!: Sequelize.HasManyGetAssociationsMixin<order_detail_has_shopping cart>;
  setOrder_detail_has_shopping carts!: Sequelize.HasManySetAssociationsMixin<order_detail_has_shopping cart, order_detail_has_shopping cartId>;
  addOrder_detail_has_shopping cart!: Sequelize.HasManyAddAssociationMixin<order_detail_has_shopping cart, order_detail_has_shopping cartId>;
  addOrder_detail_has_shopping carts!: Sequelize.HasManyAddAssociationsMixin<order_detail_has_shopping cart, order_detail_has_shopping cartId>;
  createOrder_detail_has_shopping cart!: Sequelize.HasManyCreateAssociationMixin<order_detail_has_shopping cart>;
  removeOrder_detail_has_shopping cart!: Sequelize.HasManyRemoveAssociationMixin<order_detail_has_shopping cart, order_detail_has_shopping cartId>;
  removeOrder_detail_has_shopping carts!: Sequelize.HasManyRemoveAssociationsMixin<order_detail_has_shopping cart, order_detail_has_shopping cartId>;
  hasOrder_detail_has_shopping cart!: Sequelize.HasManyHasAssociationMixin<order_detail_has_shopping cart, order_detail_has_shopping cartId>;
  hasOrder_detail_has_shopping carts!: Sequelize.HasManyHasAssociationsMixin<order_detail_has_shopping cart, order_detail_has_shopping cartId>;
  countOrder_detail_has_shopping carts!: Sequelize.HasManyCountAssociationsMixin;
  // shopping cart belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof shopping cart {
    return shopping cart.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'shopping cart',
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
      {
        name: "fk_shopping cart_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
