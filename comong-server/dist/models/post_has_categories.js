"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post_has_categories = void 0;
const sequelize_1 = require("sequelize");
class post_has_categories extends sequelize_1.Model {
    static initModel(sequelize) {
        return post_has_categories.init({
            post_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'post',
                    key: 'id'
                }
            },
            categories_id: {
                type: sequelize_1.DataTypes.INTEGER,
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
exports.post_has_categories = post_has_categories;
//# sourceMappingURL=post_has_categories.js.map