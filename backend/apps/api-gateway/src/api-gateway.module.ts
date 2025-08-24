import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';
import { diskStorage } from 'multer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [path.resolve(process.cwd(), '.env')]
    }),

     MulterModule.register({
      storage: diskStorage({
        destination: './uploads/profile-pics',
        filename: (_req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `profile-${unique}${path.extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),

    ClientsModule.registerAsync([
      //Auth-Service
      {
        name: 'AUTH-SERVICE',
        inject: [ConfigService],
        useFactory: (cfg: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: cfg.get<string>('AUTH_HOST', '127.0.0.1'),
            port: cfg.get<number>('AUTH_PORT', 4001),
          },
        }),
      },
      //Post-Service
      {
        name: 'POST-SERVICE',
        inject: [ConfigService],
        useFactory: (cfg: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: cfg.get<string>('POST_HOST', '127.0.0.1'),
            port: cfg.get<number>('POST_PORT', 4002),
          },
        }),
      },
    ])
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}