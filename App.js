import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Main from './components/Main';

export default function App(props){
const [isLoadingComplete, setLoadingComplete] = useState(false);
if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
  return (
    <Main />
  );
}
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'roboto-reg': require('./assets/fonts/Roboto-Regular.ttf'),
      'alex-brush': require('./assets/fonts/AlexBrush-Regular.ttf')
    }),
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
