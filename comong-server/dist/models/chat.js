"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const sequelize_1 = require("sequelize");
class chat extends sequelize_1.Model {
    static initModel(sequelize) {
        return chat.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            text: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            room: {
                type: sequelize_1.DataTypes.STRING(45),
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
            tableName: 'chat',
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
                    name: "fk_chat_user1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "user_id" },
                    ]
                },
            ]
        });
    }
}
exports.chat = chat;
//# sourceMappingURL=chat.js.map