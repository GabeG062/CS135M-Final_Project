const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === 'index') {
        return {
          filePath: require('path').resolve(__dirname, 'app/ImageFlow/Imageflow.jsx'),
          type: 'sourceFile'
        };
      }
      return context.resolveRequest(context, moduleName, platform);
    }
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);