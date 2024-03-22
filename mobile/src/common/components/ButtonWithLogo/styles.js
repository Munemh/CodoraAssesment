import {StyleSheet} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
export default styles = color =>
  StyleSheet.create({
    container: {
      width: width(85),
      justifyContent: 'center',
      alignSelf: 'center',
      height: height(5.5),
      borderRadius: 10,
      alignItems: 'center',
      //paddingLeft:width(5),
      backgroundColor: color.background,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      // elevation: 10,
      flexDirection: 'row',
    },
    text: {
      color: color.textColor2,
      fontSize: 17,
      marginLeft: width(1.5),
      // fontFamily:font.one.Medium,
      lineHeight: 20,
    },
  });
