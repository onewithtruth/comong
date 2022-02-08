export declare const config: {
    development: {
        username: string;
        password: string;
        database: string;
        host: string;
        dialect: string;
        timezone: string;
        pool: {
            max: number;
            min: number;
            idle: number;
        };
    };
    production: {
        username: string;
        password: string;
        database: string;
        port: string;
        host: string;
        dialect: string;
        logging: boolean;
        timezone: string;
        pool: {
            max: number;
            min: number;
            idle: number;
        };
    };
};
