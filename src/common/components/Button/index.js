import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useColors} from '@/common/GlobalStyle';
export const Button = ({
  onPress,
  title,
  containerStyle = {},
  textStyle = {},
  bgColor = '#3F7776',
  disabled = false,
  borderRadius = 5,
  isLoading = false,
}) => {
  const colorList = useColors();
  const refStyle = styles(colorList);
  return (
    <TouchableOpacity
      style={[
        refStyle.container,
        containerStyle,
        {backgroundColor: bgColor, borderRadius: borderRadius},
      ]}
      onPress={onPress}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={colorList.background} />
      ) : (
        <Text style={[refStyle.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
