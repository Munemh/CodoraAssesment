// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// const {getDefaultConfig} = require('@react-native/metro-config');

// module.exports = (async () => {
//   const {
//     resolver: {sourceExts, assetExts},
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: true,
//         },
//       }),
//     },
//     resolver: {
//       sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
//       assetExts: ['glb', 'gltf', 'png', 'jpg', 'expo-gl'],
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
      // extraNodeModules: {
      //   '@': `${__dirname}/src`,
      // },
      // alias: {
      //   '@': `${__dirname}/src`,
      // },
//     },
//   };
// })();

const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { resolver: { sourceExts, assetExts } } = defaultConfig;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
    extraNodeModules: {
      '@': `${__dirname}/src`,
    },
    alias: {
      '@': `${__dirname}/src`,
    },
  },
  watchFolders: [path.resolve(__dirname, "../")],
};

module.exports = mergeConfig(defaultConfig, config);