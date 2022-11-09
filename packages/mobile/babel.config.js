process.env.TAMAGUI_TARGET = 'native';

module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: 'core/config/tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development'
        }
      ],
      // be sure to set TAMAGUI_TARGET
      [
        'transform-inline-environment-variables',
        {
          include: 'TAMAGUI_TARGET'
        }
      ]
    ]
  };
};
