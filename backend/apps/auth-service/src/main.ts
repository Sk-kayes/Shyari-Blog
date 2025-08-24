import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // Create app so ConfigService is available
  const app = await NestFactory.create(AuthServiceModule);

  const cfg = app.get(ConfigService);
  const host = cfg.get<string>('AUTH_HOST', '127.0.0.1');
  const port = cfg.get<number>('AUTH_PORT', 4001);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host, port },
  });

  await app.startAllMicroservices();
  console.log(`auth-service tcp://${host}:${port}`);
}
bootstrap();