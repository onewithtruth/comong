import { Injectable } from '@nestjs/common';
const models = require('../models/index');

@Injectable()
export class PostService {
  async getCategoryList() {
    let categoryLists = await models.categories.findAll({
      attributes: ['id', 'category'],
    });
    categoryLists = categoryLists.map((elem) => {
      return elem.dataValues;
    });
    return { data: categoryLists, message: 'ok' };
  }
}
