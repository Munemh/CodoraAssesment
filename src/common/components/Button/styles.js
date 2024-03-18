import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
export default styles = color =>
  StyleSheet.create({
    container: {
      width: width(74),
      alignSelf: 'center',
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color.buttonColor1,
    },
    text: {
      color: color.textColor1,
      fontSize: 17,
      // fontFamily: font.one.Medium
    },
  });
