import { Injectable } from '@nestjs/common';
const models = require('../../models/index');

@Injectable()
export class AuthService {
  // constructor(private jwtService: JwtService) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await models.user.findOne({
      where: {
        email: email,
      },
    });
    if (user && user.dataValues.password === password) {
      const result = {
        id: user.dataValues.id,
        nickname: user.dataValues.nickname,
        email: user.dataValues.email,
      };
      return result;
    }
    return null;
  }
}
