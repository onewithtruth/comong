"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post_has_chat = void 0;
const sequelize_1 = require("sequelize");
class post_has_chat extends sequelize_1.Model {
    static initModel(sequelize) {
        return post_has_chat.init({
            post_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'post',
                    key: 'id'
                }
            },
            chat_id: {
                type: sequelize_1.DataTypes.INTEGER,
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
exports.post_has_chat = post_has_chat;
//# sourceMappingURL=post_has_chat.js.map