import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/color';

export default function InstructionText({children, style}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
