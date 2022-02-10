import * as dotenv from 'dotenv';
dotenv.config();

import { Body, Controller, Post, Response } from '@nestjs/common';
import { OauthReqDto } from './dto/oauthReq.dto';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @Post('oauthgoogle')
  getResfromGoogle(@Body() authorizationCode: OauthReqDto, @Response() res: any) {
    const code = authorizationCode.authorizationCode;
    const getTokenurl = `https://oauth2.googleapis.com/token?client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${process.env.GOOGLE_REDIRECT_URL}`;
    this.oauthService.googleOauthlogin(getTokenurl, res);
  }

  @Post('oauthkakao')
  getResfromKakao(@Body() authorizationCode: OauthReqDto, @Response() res: any) {
    const code = authorizationCode.authorizationCode;
    const getTokenurl = `https://kauth.kakao.com/oauth/token?code=${code}&client_id=${process.env.KAKAO_CLIENT_ID}&client_secret=${process.env.KAKAO_CLIENT_SECRET}&redirect_uri=${process.env.KAKAO_REDIRECT_URL}&grant_type=authorization_code`;
    this.oauthService.kakaoOauthlogin(getTokenurl, res);
  }

  @Post('oauthnaver')
  getResfromnaver(@Body() authorizationCode: OauthReqDto, @Response() res: any) {
    const code = authorizationCode.authorizationCode;
    const getTokenurl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.NAVER_CLIENT_ID}&client_secret=${process.env.NAVER_CLIENT_SECRET}&code=${code}`;
    this.oauthService.naverOauthlogin(getTokenurl, res);
  }
}
