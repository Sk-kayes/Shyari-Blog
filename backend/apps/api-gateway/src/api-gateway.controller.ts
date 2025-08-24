import { Body, Controller, Get, Inject, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiGatewayService } from './api-gateway.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from 'apps/auth-service/src/dto/create-user.dto';
import { LoginUserDto } from 'apps/auth-service/src/dto/login-user.dto';


@Controller()
export class ApiGatewayController {
  constructor(
    private readonly apiGatewayService: ApiGatewayService,
    @Inject("AUTH-SERVICE") private readonly authClient: ClientProxy,
    @Inject("POST-SERVICE") private readonly postClient: ClientProxy
  ) {}

  // Api-Gatewayservice
  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  // Auth-Service
  @Post('auth/register')
  @UseInterceptors(FileInterceptor('profilePic'))
  register(
    @Body() dto: CreateUserDto,
    @UploadedFile() profilePic?: Express.Multer.File,
  ) {
    const payload = {
      ...dto,
      profilePic: profilePic ? profilePic.path : undefined,
    };
    return this.authClient.send({ cmd: 'auth.register' }, payload);
  }

  @Post('auth/login')
  login(@Body() dto: LoginUserDto) {
    return this.authClient.send({ cmd: 'auth.login' }, dto);
  }

  // Post-Service
  @Get("post")
  getPostHello() {
    return this.postClient.send({cmd: "post-service"}, {});
  }
}