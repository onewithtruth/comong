import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(readonly postservice: PostService) {}

  @Get('categorylist')
  getCategoryList(): object {
    return this.postservice.getCategoryList();
  }
}
