import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import IORedis from 'ioredis';
import RedisStore from 'connect-redis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const redis = new IORedis('redis://default:pass123456@localhost:6380');

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  app.use(
    session({
      secret: '123456',
      name: 'session',
      resave: true,
      saveUninitialized: false,
      cookie: {
        secure: false,
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 8600000,
      },
      store: new RedisStore({
        client: redis,
        prefix: 'session:',
      }),
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
