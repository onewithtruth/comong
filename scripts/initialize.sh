#!/bin/bash
cd /home/ubuntu/comong/server
npm install
npm install pm2@latest -g
npm build
sudo apt-get update
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown ubuntu /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80