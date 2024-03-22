module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  exclude: [/node_modules\/expo-gl/],
  plugins: [
    // ...
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-config',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@': './src/',
        },
      },
    ],
  ],
};
