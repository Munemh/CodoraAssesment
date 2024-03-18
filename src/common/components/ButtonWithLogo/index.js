import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {height} from 'react-native-dimension';
import {useColors} from '@/common/GlobalStyle';
export const ButtonWithLogo = ({
  onPress,
  title,
  containerStyle = {},
  textStyle = {},
  logo,
  marginTop = height(2.2),
}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  return (
    <TouchableOpacity
      style={[refStyle.container, containerStyle, {marginTop: marginTop}]}
      onPress={onPress}>
      {logo && logo}
      <Text style={[refStyle.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
