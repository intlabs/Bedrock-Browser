#!/bin/sh
redis-server &
export PORT=80
cd /app && npm start
