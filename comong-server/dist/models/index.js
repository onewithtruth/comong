"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const init_models_1 = require("./init-models");
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
const env = 'development';
const sequelizeConfig = config_1.config[env];
const sequelize = new sequelize_1.Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
    host: sequelizeConfig.host,
    timezone: sequelizeConfig.timezone,
    dialect: 'mysql',
});
console.log(sequelize);
const models = (0, init_models_1.initModels)(sequelize);
module.exports = models;
//# sourceMappingURL=index.js.map