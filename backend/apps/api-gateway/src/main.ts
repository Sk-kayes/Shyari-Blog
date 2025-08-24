import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApiGatewayModule);

  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/uploads/',
  });
  app.enableCors({ origin: true, credentials: true });
  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    }),
  );

  const cfg = app.get(ConfigService);
  const port = cfg.get<number>('GATEWAY_PORT', 3000);
  const host = cfg.get<string>('GATEWAY_HOST', '0.0.0.0');
  await app.listen(port, host);
  console.log(`api-gateway http://${host}:${port}`);
}
bootstrap();