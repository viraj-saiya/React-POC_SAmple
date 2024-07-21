const presets = ['module:metro-react-native-babel-preset'];
const plugins = [['react-native-reanimated/plugin']];

plugins.push([
  'module-resolver',
  {
    root: ['.'],
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json', '.svg', '.png'],
    alias: {
      assets: './src/assets',
    },
  },
  
]);

module.exports = {
  presets,
  plugins,
};
