import { IsString } from "class-validator";

export class OauthReqDto {
  @IsString()
  readonly authorizationCode: string;
}