#!/bin/bash

echo "Cleaning up...."

delete_lock_files=''

while true;
do
  read -p "Also delete .lock files? (Y/N): " delete_lock_files
  if [[ $delete_lock_files == [yY] || $delete_lock_files == [nN] ]]; then
    case "$delete_lock_files" in
      y) delete_lock_files=true ;;
      Y) delete_lock_files=true ;;
      n) delete_lock_files=false ;;
      N) delete_lock_files=false ;;
    esac
    break
  fi
done

echo "deleting /node_modules"
rm -rf node_modules
if [[ $delete_lock_files ]]; then
  echo "deleting /yarn.lock"
  rm -rf yarn.lock
fi

echo "deleting packages/core/node_modules"
rm -rf packages/core/node_modules
if [[ $delete_lock_files ]]; then
  echo "deleting packages/core/yarn.lock"
  rm -rf packages/core/yarn.lock
fi

echo "deleting packages/web/node_modules"
rm -rf packages/web/node_modules
if [[ $delete_lock_files ]]; then
  echo "deleting packages/web/yarn.lock"
  rm -rf packages/web/yarn.lock
fi

echo "deleting packages/mobile/node_modules"
rm -rf packages/mobile/node_modules
echo "deleting packages/mobile/ios/Pods"
rm -rf packages/mobile/ios/Pods
if [[ $delete_lock_files ]]; then
  echo "deleting packages/mobile/yarn.lock"
  rm -rf packages/mobile/yarn.lock
  echo "deleting packages/mobile/Podfile.lock"
  rm -rf packages/mobile/ios/Podfile.lock
fi

echo "All done. run yarn to install dependencies"
