import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  const Port = 3000;
  await app.listen(Port, () => {
    console.log('server is running on Port ', Port);
  });
}
bootstrap();
