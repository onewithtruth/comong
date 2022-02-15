import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
require('dotenv').config()

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
