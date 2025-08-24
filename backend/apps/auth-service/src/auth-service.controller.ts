import { Controller, Get } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @MessagePattern({ cmd: 'auth.register' })
  async register(@Payload() dto: CreateUserDto) {
    return this.authServiceService.register(dto);
  }

  @MessagePattern({ cmd: 'auth.login' })
  async login(@Payload() dto: LoginUserDto) {
    return this.authServiceService.login(dto);
  }
}