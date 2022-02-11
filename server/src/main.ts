import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from 'src/util/swagger';
dotenv.config();

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
    fs.existsSync('./secrets/comong.key.pem') &&
    fs.existsSync('./secrets/comong.crt.pem')
  ) {
    const httpsOptions = {
      key: fs.readFileSync('./secrets/comong.key.pem', 'utf8'),
      cert: fs.readFileSync('./secrets/comong.crt.pem', 'utf8'),
    };
    const app = await NestFactory.create(AppModule, {
      httpsOptions,
    });
    app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
    app.enableCors(corsOptions);
    app.use(cookieParser());
    setupSwagger(app);
    await app.listen(443);
    console.log(`https server runnning on port 443`);
  } else {
    const app = await NestFactory.create(AppModule, {});
    app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
    app.enableCors(corsOptions);
    app.use(cookieParser());
    setupSwagger(app);
    const port = process.env.PORT || 3000
    await app.listen(port);
    console.log(`http server runnning`);
  }
}
bootstrap();
