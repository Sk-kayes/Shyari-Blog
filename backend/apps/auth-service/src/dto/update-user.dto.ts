import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    fullName?: string;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @MinLength(6)
    password?: string;

    @IsOptional()
    // profilePic?: Express.Multer.File;

    @IsOptional()
    dob?: Date;

    @IsOptional()
    @IsString()
    about?: string;
}
