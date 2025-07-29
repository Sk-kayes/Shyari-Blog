/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GatewayService } from './gateway.service';
import { AuthController } from './auth/auth.controller';
import { PostController } from './post/post.controller';

@Module({
  imports: [
  ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule
  ],
  controllers: [AuthController, PostController],
  providers: [GatewayService],
})
export class AppModule {}
