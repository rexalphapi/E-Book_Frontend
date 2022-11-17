#!/bin/sh
cd /home/ec2-user/server/src
npm start
pm2 start npm --name "E-Book_Frontend" -- start
pm2 startup
pm2 save
pm2 restart all
