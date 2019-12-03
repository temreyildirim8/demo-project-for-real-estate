import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {ThemeProvider} from 'styled-components';
import {name as appName} from './app.json';
import theme from './src/common/theme';

const ThemedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => ThemedApp);
