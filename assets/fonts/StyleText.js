import React from 'react';
import { Text } from 'react-native';

export function RobotoThin(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'roboto-thin' }]} />
  );
}

export function RobotoReg(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'roboto-reg' }]} />
  );
}

export function AlexBrush(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'alex-brush' }]} />
  );
}
