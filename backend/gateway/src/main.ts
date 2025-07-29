/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  await app.listen(process.env.PORT ?? 3000);
  console.log('Gateway is running on http://localhost:3000');
}
bootstrap();
