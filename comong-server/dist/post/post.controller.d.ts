import { PostService } from './post.service';
export declare class PostController {
    readonly postservice: PostService;
    constructor(postservice: PostService);
    getCategoryList(): object;
}
