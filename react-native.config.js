const path = require('path');

module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  resolver: {
    extraNodeModules: {
      '@': path.resolve(__dirname, './src/*'),
    },
  },
  assets: [
    './src/common/assets/fonts',
    // './src/assets/sounds'
],
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
};
