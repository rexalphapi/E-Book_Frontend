#!/bin/bash
cd /home/ec2-user/server
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
yum -y install nodejs npm@8.3.0
