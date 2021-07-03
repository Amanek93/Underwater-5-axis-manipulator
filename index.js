import 'react-native-gesture-handler';

import './src/app/shared/language/i18n';

import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
