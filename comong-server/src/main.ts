require('dotenv').config();
const fs = require('fs');

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

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
  if (
    fs.existsSync(__dirname + '/../key.pem') &&
    fs.existsSync(__dirname + '/../cert.pem')
  ) {
    const httpsOptions = {
      key: fs.readFileSync(__dirname + '/../key.pem', 'utf8'),
      cert: fs.readFileSync(__dirname + '/../cert.pem', 'utf8'),
    };
    const app = await NestFactory.create(AppModule, {
      httpsOptions,
    });
    app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
    app.enableCors(corsOptions);
    await app.listen(443);
    console.log(`https server runnning on port 443`);
  } else {
    const app = await NestFactory.create(AppModule, {});
    app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
    app.enableCors(corsOptions);
    await app.listen(80);
    console.log(`http server runnning on port 80`);
  }
}
bootstrap();
