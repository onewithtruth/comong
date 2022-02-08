"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const sequelize_1 = require("sequelize");
class user extends sequelize_1.Model {
    static initModel(sequelize) {
        return user.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nickname: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: false
            },
            mobile: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            password: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            address01: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            address02: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            role: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            sequelize,
            tableName: 'user',
            hasTrigger: true,
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
            ]
        });
    }
}
exports.user = user;
//# sourceMappingURL=user.js.map