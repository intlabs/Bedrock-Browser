#!/bin/sh
redis-server &
cd /app && npm start
