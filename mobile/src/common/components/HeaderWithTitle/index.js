import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export const HeaderWithTitle = ({
  onPress = () => {},
  title,
  containerStyle = {},
  textStyle = {},
  menuIcon = false,
  notificationIcon = '',
  onSecondaryButtonPress = () => {},
}) => {
  // const colorList = useColors();
  const refStyle = styles();
  const [count, setCount] = useState(0);

  return (
    <View style={[refStyle.container, containerStyle]}>
      <View style={refStyle.logoContainer}>
        <TouchableOpacity onPress={onPress}>
          {title && <Text style={[refStyle.text,{flexWrap:'wrap'}]}>{title}</Text>}
        </TouchableOpacity>
      </View>

      {notificationIcon && (
        <TouchableOpacity onPress={onSecondaryButtonPress}>
          <Text  style={refStyle.text}>{notificationIcon}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

