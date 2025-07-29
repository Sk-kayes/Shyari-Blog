/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto/update-post.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostDocument>
    ) { }

    async create(createPostDto: CreatePostDto) {
        const newPost = new this.postModel(createPostDto);
        return await newPost.save();
    }

    async findAll() {
        return this.postModel.find().sort({ createdAt: -1 });
    }

    async findOne(id: string) {
        const post = await this.postModel.findById(id);
        if (!post) throw new NotFoundException('Post not found');
        return post;
    }

    async update(id: string, updatePostDto: UpdatePostDto) {
        const post = await this.postModel.findByIdAndUpdate(id, updatePostDto, {
            new: true,
        });
        if (!post) throw new NotFoundException('Post not found');
        return post;
    }

    async remove(id: string) {
        const post = await this.postModel.findByIdAndDelete(id);
        if (!post) throw new NotFoundException('Post not found');
        return { message: 'Post deleted' };
    }
}
