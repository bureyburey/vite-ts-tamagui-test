#!/bin/bash

echo "Killing Processes:"

ps -ef | grep vite
ps -ef | grep vite | grep -v grep | awk '{print $2}' | xargs kill
