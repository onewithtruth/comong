"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const fs = require('fs');
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const corsOptions = {
        origin: '*',
        allowedHeaders: ['Content-Type', 'Authorization'],
        exposedHeaders: ['Content-Type'],
        credentials: true,
    };
    const validationPipeOptions = {
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    };
    if (fs.existsSync(__dirname + '/../key.pem') &&
        fs.existsSync(__dirname + '/../cert.pem')) {
        const httpsOptions = {
            key: fs.readFileSync(__dirname + '/../key.pem', 'utf8'),
            cert: fs.readFileSync(__dirname + '/../cert.pem', 'utf8'),
        };
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            httpsOptions,
        });
        app.useGlobalPipes(new common_1.ValidationPipe(validationPipeOptions));
        app.enableCors(corsOptions);
        await app.listen(443);
        console.log(`https server runnning on port 443`);
    }
    else {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
        app.useGlobalPipes(new common_1.ValidationPipe(validationPipeOptions));
        app.enableCors(corsOptions);
        await app.listen(80);
        console.log(`http server runnning on port 80`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map