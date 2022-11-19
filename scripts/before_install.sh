#!/bin/bash
cd /home/ubuntu/server
curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
apt -y install nodejs npm
