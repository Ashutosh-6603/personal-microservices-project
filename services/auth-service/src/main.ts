import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.port || 3001);

  await app.listen(port, '0.0.0.0');
  console.log(`Auth service listening on port ${port}`);
}
bootstrap();
