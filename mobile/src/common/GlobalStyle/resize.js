// import { Dimensions, StyleSheet } from 'react-native';
// const { width, height } = Dimensions.get('window');
// const scale = (size) => (width / 375) * size;
// const scaleHeight = (size, factor) => (height / 667) * size;
// const heightScale = (size, factor = 1) => size + (scaleHeight(size) - size) * factor;
// const widthScale = (size, factor = 1) => size + (scale(size) - size) * factor;
// const widthScaleSub = (size) => width - resize.widthScale(size);
// const square = (size, factor = 1) => height < width ? size + (scaleHeight(size) - size) : size + (scale(size) - size) * factor;
// const wps = (size) => width - resize.widthScale(size);
// const hps = (size) => width - resize.heightScale(size);
// const hp = (size, factor = 1) => size + (scaleHeight(size) - size) * factor;
// const wp = (size, factor = 1) => size + (scale(size) - size) * factor;
// const sp = (size, factor = 1) => height < width ? size + (scaleHeight(size) - size) : size + (scale(size) - size) * factor;
// const fhp = (size, factor = 0.7) => size + (scaleHeight(size) - size) * factor;
// const fwp = (size, factor = 0.7) => size + (scale(size) - size) * factor;
// const fsp = (size, factor = 0.7) => height < width ? size + (scaleHeight(size) - size) : size + (scale(size) - size) * factor;
// const resize = {
//   width: width,
//   height: height,
//   wps,
//   hps,
//   hp,
//   wp,
//   sp,
//   fhp,
//   fwp,
//   fsp,
//   heightScale: (size, factor = 1) => heightScale(size, factor),
//   widthScale: (size, factor = 1) => widthScale(size, factor),
//   square: (size, factor = 1) => square(size),
//   widthScaleSub: (size) => width - resize.widthScale(size, factor),
// };
// export {
//   wps,
//   hps,
//   hp,
//   wp,
//   sp,
//   fhp,
//   fwp,
//   fsp,
//   resize,
//   heightScale,
//   widthScale,
//   widthScaleSub,
//   square,
//   width,
//   height,
//   StyleSheet,
// };
