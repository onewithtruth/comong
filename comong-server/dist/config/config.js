"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.config = {
    development: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: 'project01_marketApp',
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
        timezone: '+09:00',
        pool: {
            max: 20,
            min: 5,
            idle: 60000,
        },
    },
    production: {
        username: '',
        password: '',
        database: '',
        port: '',
        host: '',
        dialect: 'mysql',
        logging: false,
        timezone: '+09:00',
        pool: {
            max: 20,
            min: 5,
            idle: 60000,
        },
    },
};
//# sourceMappingURL=config.js.map