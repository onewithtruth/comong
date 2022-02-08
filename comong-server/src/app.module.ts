import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ChatModule } from './chat/chat.module';
import { OauthModule } from './oauth/oauth.module';

@Module({
  imports: [UserModule, PostModule, ChatModule, OauthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
