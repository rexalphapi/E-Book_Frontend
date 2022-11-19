#!/bin/bash
cd /home/ubuntu/server
npm start
pm2 start npm --name "ebook-frontend" -- start
pm2 startup
pm2 save
pm2 restart all
