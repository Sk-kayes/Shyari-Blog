/* eslint-disable prettier/prettier */
import {
  Body, Controller, Delete, Get, Param, Patch, Post as HttpPost, Req } from '@nestjs/common';
import { GatewayService } from '../gateway.service';
import { Request } from 'express';

@Controller('post')
export class PostController {
  constructor(private readonly gatewayService: GatewayService) {}

  @HttpPost()
  create(@Body() body: any, @Req() req: Request) {
    return this.gatewayService.forwardRequest('post', '/post', 'post', body, req.headers.authorization);
  }

  @Get()
  getAll() {
    return this.gatewayService.forwardRequest('post', '/post', 'get');
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.gatewayService.forwardRequest('post', `/post/${id}`, 'get');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any, @Req() req: Request) {
    return this.gatewayService.forwardRequest('post', `/post/${id}`, 'patch', body, req.headers.authorization);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: Request) {
    return this.gatewayService.forwardRequest('post', `/post/${id}`, 'delete', null, req.headers.authorization);
  }
}
