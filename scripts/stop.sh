#!/bin/bash
cd /home/ubuntu/comong/server
pm2 stop dist/main.js 2> /dev/null || true
pm2 delete dist/main.js 2> /dev/null || true