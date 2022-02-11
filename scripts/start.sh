#!/bin/bash
cd /home/ubuntu/comong-server/server

export COMONG_ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export COMONG_REFRESH_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_REFRESH_SECRET --query Parameters[0].Value | sed 's/"//g')
export CLOUDFLARE_ACCOUNT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names CLOUDFLARE_ACCOUNT_ID --query Parameters[0].Value | sed 's/"//g')
export CLOUDFLARE_API_TOKEN=$(aws ssm get-parameters --region ap-northeast-2 --names CLOUDFLARE_API_TOKEN --query Parameters[0].Value | sed 's/"//g')
export DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export COMONG_GOOGLE_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_GOOGLE_CLIENT_ID --query Parameters[0].Value | sed 's/"//g')
export COMONG_GOOGLE_CLIENT_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_GOOGLE_CLIENT_SECRET --query Parameters[0].Value | sed 's/"//g')
export COMONG_GOOGLE_REDIRECT_URL=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_GOOGLE_REDIRECT_URL --query Parameters[0].Value | sed 's/"//g')
export COMONG_KAKAO_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_KAKAO_CLIENT_ID --query Parameters[0].Value | sed 's/"//g')
export COMONG_KAKAO_CLIENT_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_KAKAO_CLIENT_SECRET --query Parameters[0].Value | sed 's/"//g')
export COMONG_KAKAO_REDIRECT_URL=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_KAKAO_REDIRECT_URL --query Parameters[0].Value | sed 's/"//g')
export COMONG_NAVER_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_NAVER_REDIRECT_URL --query Parameters[0].Value | sed 's/"//g')
export COMONG_NAVER_CLIENT_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_NAVER_REDIRECT_URL --query Parameters[0].Value | sed 's/"//g')
export COMONG_NAVER_REDIRECT_URL=$(aws ssm get-parameters --region ap-northeast-2 --names COMONG_NAVER_REDIRECT_URL --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start dist/main.js