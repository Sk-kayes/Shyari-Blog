/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto/update-post.dto';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Get()
    async findAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.postService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postService.update(id, updatePostDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.postService.remove(id);
    }
}
