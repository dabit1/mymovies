#!/bin/bash

FILENAME=$(basename -- "${@: -1}")
FEATURE_NAME="${FILENAME%.*}"
FOLDER=$([[ "$1" == "--e2e" ]] && echo "e2e-features" || echo "features")
JS_FILE="$FOLDER/step_definitions/$FEATURE_NAME.js"

# echo colors
red="$(tput setaf 1)"
bold="$(tput bold)"
green="$(tput setaf 2)"

if [ ! -f $JS_FILE ]
then
  INTERFACE=$([[ "$1" == "--e2e" ]] && echo "async-await" || echo "synchronous")  
  STEPS=`node_modules/.bin/babel-node node_modules/cucumber/bin/cucumber-js ${@: -1} --dry-run --format snippets --format-options "{\"snippetInterface\": \"$INTERFACE\"}"`
  STEPS_NO_COMMENTS="$(echo "$STEPS" | grep -v '^  // ')"
  MODULES="import { Given, When, Then } from 'cucumber';
import { createMockStore, mountConnectedComponent } from 'react-redux-test';
import expect from 'expect';

"

  echo "$MODULES$STEPS_NO_COMMENTS" > $JS_FILE
  echo "${green}${bold}Done"
else
  echo "${red}${bold}The steps files already exists"
fi