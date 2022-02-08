"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const sequelize_1 = require("sequelize");
class post extends sequelize_1.Model {
    static initModel(sequelize) {
        return post.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            contents: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            price: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            image_src: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'post',
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
                    name: "fk_post_user1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "user_id" },
                    ]
                },
            ]
        });
    }
}
exports.post = post;
//# sourceMappingURL=post.js.map