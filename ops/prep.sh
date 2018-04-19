#! /usr/bin/env bash

# get partner name
P_NAME=$1

# set current directory
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../" && pwd)"
cd $BASE_DIR

rm data.json
rm theme.json
rm now.json
rm -rf static

mkdir static

cp partners/$P_NAME/data.json data.json
cp partners/$P_NAME/theme.json theme.json
cp partners/$P_NAME/now.json now.json
cp partners/$P_NAME/static/* static
