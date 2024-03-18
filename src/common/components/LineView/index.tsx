import { useColors } from '@/common/GlobalStyle';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HorizontalLine: React.FC = ({ text, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export const Hrline = ({ Width, height, color, style, centered }: any) => {
  const colors : any = useColors()
  return (
      <View style={[{ height: height ?? 1, width: Width ?? '100%', backgroundColor: color ?? colors.white, alignSelf: centered ? 'center' : 'flex-start', }, style]} />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(138, 138, 138, 1)',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: 'rgba(138, 138, 138, 1)'
  },
});

export default HorizontalLine;