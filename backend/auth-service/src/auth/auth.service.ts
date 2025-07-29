/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto/login-user.dto';
import { BlacklistedToken, BlacklistedTokenDocument } from './schemas/blacklisted-token.schema/blacklisted-token.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(BlacklistedToken.name) private blacklistModel: Model<BlacklistedTokenDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService,
        private configService: ConfigService
    ) { }

    async register(createUserDto: CreateUserDto) {
        const existingUser = await this.userModel.findOne({ email: createUserDto.email });

        if (existingUser) {
            throw new ConflictException('Email already exists');
        }

        const hashed = await bcrypt.hash(createUserDto.password, 10);

        const newUser = new this.userModel({
            username: createUserDto.username,
            email: createUserDto.email,
            password: hashed,
        });
        return newUser.save();
    }

    async login(loginUserDto: LoginUserDto) {
        const user = await this.userModel.findOne({ email: loginUserDto.email });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(loginUserDto.password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        const payload = { email: user.email, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

    async logout(token: string) {
        if (!token) {
            throw new UnauthorizedException('Token not provided');
        }
        const blacklisted = await this.isTokenBlacklisted(token);
        if (blacklisted) {
            return { message: 'Token already blacklisted. Please login again.' };
        }
        try {
            this.jwtService.verify(token, {
                secret: this.configService.get<string>('JWT_SECRET'),
            });

            // 3. Save to blacklist
            await this.blacklistModel.create({ token });
            return { message: 'Logged out successfully' };
        } catch (e: any) {
            return { message: 'Invalid or expired token', error: e.message };
        }
    }

    async isTokenBlacklisted(token: string): Promise<boolean> {
        const exists = await this.blacklistModel.findOne({ token });
        return !!exists;
    }
}
