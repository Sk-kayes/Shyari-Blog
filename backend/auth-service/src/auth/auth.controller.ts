/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto/login-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post("register")
    async registerUser(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @Post("login")
    async loginUser(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto);
    }
    
    @Post('logout')
    async logout(@Req() req: Request) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('Authorization header missing');
        }
        const token = authHeader.replace('Bearer ', '');
        return await this.authService.logout(token);
    }
}

