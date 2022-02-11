import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { order_detail, order_detailId } from './order_detail';
import type { shopping cart, shopping cartId } from './shopping cart';

export interface order_detail_has_shopping cartAttributes {
  order_detail_id: number;
  'shopping cart_id': number;
}

export type order_detail_has_shopping cartPk = "order_detail_id" | "shopping cart_id";
export type order_detail_has_shopping cartId = order_detail_has_shopping cart[order_detail_has_shopping cartPk];
export type order_detail_has_shopping cartCreationAttributes = order_detail_has_shopping cartAttributes;

export class order_detail_has_shopping cart extends Model<order_detail_has_shopping cartAttributes, order_detail_has_shopping cartCreationAttributes> implements order_detail_has_shopping cartAttributes {
  order_detail_id!: number;
  'shopping cart_id'!: number;

  // order_detail_has_shopping cart belongsTo order_detail via order_detail_id
  order_detail!: order_detail;
  getOrder_detail!: Sequelize.BelongsToGetAssociationMixin<order_detail>;
  setOrder_detail!: Sequelize.BelongsToSetAssociationMixin<order_detail, order_detailId>;
  createOrder_detail!: Sequelize.BelongsToCreateAssociationMixin<order_detail>;
  // order_detail_has_shopping cart belongsTo shopping cart via shopping cart_id
  shopping cart!: shopping cart;
  getShopping cart!: Sequelize.BelongsToGetAssociationMixin<shopping cart>;
  setShopping cart!: Sequelize.BelongsToSetAssociationMixin<shopping cart, shopping cartId>;
  createShopping cart!: Sequelize.BelongsToCreateAssociationMixin<shopping cart>;

  static initModel(sequelize: Sequelize.Sequelize): typeof order_detail_has_shopping cart {
    return order_detail_has_shopping cart.init({
    order_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'order_detail',
        key: 'id'
      }
    },
    'shopping cart_id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'shopping cart',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_detail_has_shopping cart',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_detail_id" },
          { name: "shopping cart_id" },
        ]
      },
      {
        name: "fk_order_detail_has_shopping cart_shopping cart1_idx",
        using: "BTREE",
        fields: [
          { name: "shopping cart_id" },
        ]
      },
      {
        name: "fk_order_detail_has_shopping cart_order_detail1_idx",
        using: "BTREE",
        fields: [
          { name: "order_detail_id" },
        ]
      },
    ]
  });
  }
}
