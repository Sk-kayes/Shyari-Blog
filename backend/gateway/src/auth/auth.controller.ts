/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { GatewayService } from '../gateway.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post('register')
  register(@Body() body: any) {
    return this.gatewayService.forwardRequest('auth', '/auth/register', 'post', body);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.gatewayService.forwardRequest('auth', '/auth/login', 'post', body);
  }

  @Post('logout')
  logout(@Req() req: Request) {
    const token = req.headers.authorization;
    return this.gatewayService.forwardRequest('auth', '/auth/logout', 'post', null, token);
  }
}
