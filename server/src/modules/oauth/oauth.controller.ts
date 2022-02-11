import * as dotenv from 'dotenv';
dotenv.config();

import { Body, Controller, Post, Response } from '@nestjs/common';
import { OauthReqDto } from './dto/oauthReq.dto';
import { OauthService } from './oauth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('oauth')
@ApiTags('소셜 인증 관련')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Post('oauthgoogle')
  getRes(@Body() authorizationCode: OauthReqDto, @Response() res: any) {
    const code = authorizationCode.authorizationCode;
    const getTokenurl = `https://oauth2.googleapis.com/token?client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${process.env.GOOGLE_REDIRECT_URL}`;
    this.oauthService.googleOauthlogin(getTokenurl, res);
  }
}
