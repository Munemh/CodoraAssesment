import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
// import { font } from '../../GlobalStyle/font';
export default styles = color =>
  StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 14,
      // fontFamily: font.one.Medium,
      color: color.textColor2,
      flexDirection: 'row',
      alignItems: 'center',
      // lineHeight: 15,
    },
    mainWrapper: {
      width: width(89),
      borderColor: color.borderColor,
      borderWidth: 2.5,
      height: height(5.3),
      paddingHorizontal: width(3),
      borderRadius: width(1.5),
      backgroundColor: color.background,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.12,
      shadowRadius: 5.46,
      elevation: 9,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    suffixText: {
      // fontFamily: font.one.Medium,
      color: color.lightGreen,
      fontSize: 14,
      lineHeight: 13,
    },
    leftContainer: {
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingLeft: width(2),
    },
    errorMessage: {
      color: '#C01616',
      textAlign: 'left',
      fontSize: 12,
      marginVertical: height(0.3),
      marginLeft: width(1),
    },
    errorMessageContainer: {
      width: width(65),
      //marginTop:5
    },
    label: {
      color: color.descriptionColor1,
      // fontFamily: font.one.Medium,
      fontSize: 13.4,
      lineHeight: 20,
      fontWeight: '500',
      marginBottom: height(0.8),
    },
    //Label Component Style
    mainWrapperLabel: {
      width: '100%',
      borderColor: color.borderColor,
      borderWidth: 2.5,
      height: height(5.3),
      paddingHorizontal: width(3),
      borderRadius: width(1.5),
      // marginTop: height(1.5),
      backgroundColor: color.background,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    topContainer: {
      width: width(82),
      alignSelf: 'center',
    },
  });
