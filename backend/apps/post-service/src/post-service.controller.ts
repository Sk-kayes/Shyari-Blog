import { Controller, Get } from '@nestjs/common';
import { PostServiceService } from './post-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PostServiceController {
  constructor(private readonly postServiceService: PostServiceService) {}

  @MessagePattern({cmd: "post-service"})
  getHello(): string {
    return this.postServiceService.getHello();
  }
}
