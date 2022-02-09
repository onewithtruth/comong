import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { category } from './entities/category.entity';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('items')
@ApiTags('상품 정보 관련')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @ApiOperation({ summary: '새로운 상품 등록', description: '회원 가입 요청을 받습니다.' })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  @ApiOperation({ summary: '상품 정보 목록', description: '회원 가입 요청을 받습니다.' })
  @ApiCreatedResponse({ description: '유저를 생성한다.'})
  findAll() {
    return this.itemsService.findAll();
  }

  @Get('categorylist')
  getCategoryList(): Promise<category[]> {
    return this.itemsService.getCategoryList();
  }

  @Get(':id')
  @ApiOperation({ summary: '상품 상세 정보', description: '회원 가입 요청을 받습니다.' })
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '상품 정보 수정', description: '회원 가입 요청을 받습니다.' })
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '상품 삭제', description: '회원 가입 요청을 받습니다.' })
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }

}
