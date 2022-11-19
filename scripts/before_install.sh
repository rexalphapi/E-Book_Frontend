#!/bin/bash
cd /home/ubuntu/server
curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
yum -y install nodejs npm@8.3.0
