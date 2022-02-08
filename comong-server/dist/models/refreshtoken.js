"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshtoken = void 0;
const sequelize_1 = require("sequelize");
class refreshtoken extends sequelize_1.Model {
    static initModel(sequelize) {
        return refreshtoken.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            refreshtoken: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            exp: {
                type: sequelize_1.DataTypes.DATE,
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
            tableName: 'refreshtoken',
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
                    name: "fk_refreshtoken_user1_idx",
                    using: "BTREE",
                    fields: [
                        { name: "user_id" },
                    ]
                },
            ]
        });
    }
}
exports.refreshtoken = refreshtoken;
//# sourceMappingURL=refreshtoken.js.map