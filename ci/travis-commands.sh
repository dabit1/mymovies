#!/bin/bash
set -e

# install and init chrome
export CHROME_SOURCE_URL=https://dl.google.com/dl/linux/direct/google-chrome-stable_current_amd64.deb
wget --no-verbose -O /tmp/$(basename $CHROME_SOURCE_URL) $CHROME_SOURCE_URL
sudo dpkg -i /tmp/$(basename $CHROME_SOURCE_URL) &> /dev/null
export CHROME_BIN=chromium-browser
export DISPLAY=:99.0
sh -e /etc/init.d/xvfb start

# start development environment
npm start &

# scripts
commitlint-travis
npm run eslint
npm run jsinspect
npm run test:coverage
npm run test:features
npm run test:e2e-features
npm run test:e2e-features:firefox
npm run test:e2e-features:mobile
killall node

# building
if [[ "$TRAVIS_BRANCH" = "testing" ]]; then npm run build:testing; fi ;
if [[ "$TRAVIS_BRANCH" = "master" ]]; then npm run build; fi ;
