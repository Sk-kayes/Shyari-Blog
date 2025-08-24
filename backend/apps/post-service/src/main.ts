import { NestFactory } from '@nestjs/core';
import { PostServiceModule } from './post-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(PostServiceModule);

  const cfg = app.get(ConfigService);
  const host = cfg.get<string>('POST_HOST', '127.0.0.1');
  const port = cfg.get<number>('POST_PORT', 4002);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host, port },
  });

  await app.startAllMicroservices();
  console.log(`post-service tcp://${host}:${port}`);
}
bootstrap();
