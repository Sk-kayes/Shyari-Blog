import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthServiceService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }
  async register(dto: CreateUserDto) {
    if (dto.password !== dto.confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    // map file path (if provided)
    const profilePicPath =
      typeof dto.profilePic === 'string'
        ? dto.profilePic
        : (dto as any).profilePic?.path ?? undefined;

    const exists = await this.userModel.findOne({
      $or: [{ email: dto.email }, { username: dto.username }],
    });
    if (exists) throw new BadRequestException('User already exists');

    const hash = await bcrypt.hash(dto.password, 10);
    const user = await this.userModel.create({
      fullName: dto.fullName,
      username: dto.username,
      email: dto.email,
      password: hash,
      profilePic: profilePicPath,
      dob: dto.dob,
      about: dto.about,
    });

    const { password, ...rest } = user.toObject();
    return rest;
  }

  async login(dto: LoginUserDto) {
    const query: any = dto.email ? { email: dto.email } : { username: dto.username };
    const user = await this.userModel.findOne(query);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(dto.password, user.password);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    const { password, ...rest } = user.toObject();
    return { user: rest, token: 'TODO_JWT' };
  }
}