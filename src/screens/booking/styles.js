// import { Platform, StyleSheet } from 'react-native';
// import { useAppTheme } from '@context';
// import { COLOR, fontFamily, fontSize } from '@constants';
// import { height, width } from '@helpers';

// export const style = () => {
//   const { theme } = useAppTheme();
//   const styles = StyleSheet.create({
//     wrapper: {
//       backgroundColor: theme ? COLOR.backgroundDark2 : COLOR.backgroundLight2,
//       borderRadius: 24,
//       paddingHorizontal: width(4),
//       paddingTop: width(4),
//       height: height(50),
//       width: width(90),
//       paddingBottom: width(4),
//       marginHorizontal: width(5),
//       // marginTop: height(.5),
//       // elevation: 1,
//       // shadowColor: '#000',
//       // shadowOffset: { width: 0, height: 2 },
//       // shadowOpacity: 0.1,
//       // shadowRadius: 2,
//       elevation: 1,
//       shadowColor: theme ? COLOR.darkShadowColor1 : COLOR.lightShadowColor1,
//       shadowOffset: {
//         width: 0,
//         height: 4,
//       },
//       shadowRadius: 8,
//       shadowOpacity: 0.2,
//       elevation: 4,
//       // zIndex: 10000
//     },
//     text: {
//       fontFamily: fontFamily.Regular,
//       fontSize: fontSize.medium,
//       width: width(65),
//       // alignSelf: 'center'
//     },
//     interestText: {
//       fontFamily: fontFamily.SemiBold,
//       fontSize: fontSize.regular,
//     },
//     title: {
//       marginTop: 24,
//       textAlign: 'center',
//       fontFamily: fontFamily.Bold,
//       fontSize: fontSize.h5A,
//       width: width(60),
//       alignSelf: 'center',
//     },
//     btn: {
//       position: 'absolute',
//       bottom: 32,
//       right: 16,
//       left: 16,
//     },
//     interestBtn: {
//       // position: 'absolute',
//       // bottom: Platform.OS == 'ios' ? -height(5) : -height(8),
//       // right: 16,
//       // left: 16,
//       marginHorizontal: width(8),
//       height: height(4),
//       marginBottom: 0,
//     },
//     iconWrapper: {
//       backgroundColor: theme ? 'rgba(255,255,255,.1)' : 'rgba(114, 58, 222, .1)',
//       alignItems: 'center',
//       alignSelf: 'center',
//       height: width(30),
//       width: width(30),
//       justifyContent: 'center',
//       borderRadius: width(20),
//       // marginVertical: height(10)
//     },
//     icon: {
//       backgroundColor: theme ? COLOR.primary800Dark : COLOR.backgroundLight3,
//       height: width(7),
//       width: width(7),
//       borderRadius: 10,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     interestWrapper: {
//       backgroundColor: theme ? COLOR.backgroundDark2 : COLOR.backgroundLight2,
//       borderRadius: 24,
//       paddingHorizontal: width(4),
//       paddingTop: width(4),
//       width: width(90),
//       paddingBottom: width(4),
//       marginHorizontal: width(5),
//       marginTop: height(0.5),
//       elevation: 1,
//       shadowColor: theme ? COLOR.darkShadowColor1 : COLOR.lightShadowColor1,
//       shadowOffset: {
//         width: 0,
//         height: 4,
//       },
//       shadowRadius: 8,
//       shadowOpacity: 0.2,
//       elevation: 4,
//     },
//   });
//   return { styles };
// };
