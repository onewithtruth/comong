import * as dotenv from 'dotenv';
dotenv.config();

import { Injectable, HttpException, HttpStatus, Response} from '@nestjs/common';
import { OauthRes } from './entities/oauthRes.entity';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const models = require('../../models/index');
const jwt = require('jsonwebtoken')


@Injectable()
export class OauthService {
  
  private oauthRes: OauthRes;

  async googleOauthlogin(url: string, @Response() res: any): Promise<any> {
    console.log(url);

    const accessTokenOptions: AxiosRequestConfig = {
      method: 'POST',
      url: url,
    };
    const response: AxiosResponse = await axios(accessTokenOptions).catch(
      (err) => null,
    );
    // console.log(response);
    if (!response) {
      const HttpExcep = new HttpException(
        'something wrong with authorizationCode',
        HttpStatus.NON_AUTHORITATIVE_INFORMATION
      );
      res.send(HttpExcep);
    } else {
      const accessToken = response.data.access_token;
      const userInfoOptions: AxiosRequestConfig = {
        method: "GET",
        url: `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`
      };
      const googleDataResponse: AxiosResponse = await axios(userInfoOptions);
      let { email} = googleDataResponse.data
      // console.log(email);
      const existingUser = await models.user.findOne({
        where: {
          "email": email
        }
      });
      console.log(existingUser);
      const tokenMaker = async (user: any) => {
        const payload = {
          id: user.dataValues.id,
          nickname: user.dataValues.nickname,
          email: user.dataValues.email,
          createdAt: user.dataValues.createdAt,
          updatedAt: user.dataValues.updatedAt
        }
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {expiresIn: "30m"});
        const refreshToken =  jwt.sign(payload, process.env.REFRESH_SECRET, {expiresIn: "15d"});
        const newResponse = {accessToken: accessToken, email: user.dataValues.email, nickname: user.dataValues.nickname};
        // console.log(refreshToken)
        
        const existingRefreshToken = await models.refreshtoken.findOne({
          where: {
            "user_id": user.dataValues.id
          }
        });
        
        if (!existingRefreshToken) {
          const newRefreshToken = await models.refreshtoken.create({
            "refreshtoken": refreshToken,
            "user_id": user.dataValues.id
          })
          // console.log(newRefreshToken)
        } else {
          const updatedRefreshToken = await models.refreshtoken.update({
            "refreshtoken": refreshToken
          }, {
            where: {
              "user_id": user.dataValues.id
            }
          });
          // console.log(updatedRefreshToken);

          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
          });
          const oauthResponese = {data: newResponse, message: "ok" };
          res.send(oauthResponese);
        };
      }

      if (!existingUser) {
        function getNickname(str) {
          let aIndex = str.indexOf("@");
          return str.slice(0, aIndex);
        }
        let nickname = getNickname(email)
        const newUser = await models.user.create({
          "email": email,
          "nickname": nickname
        });
        // console.log("newUser's Data:", newUser.dataValues);
        tokenMaker(newUser)
      } else {
        // console.log(existingUser.dataValues)
        tokenMaker(existingUser)
      }

    }
  }
}
