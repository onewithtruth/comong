"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
const sequelize_1 = require("sequelize");
class categories extends sequelize_1.Model {
    static initModel(sequelize) {
        return categories.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            category: {
                type: sequelize_1.DataTypes.STRING(45),
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
exports.categories = categories;
//# sourceMappingURL=categories.js.map