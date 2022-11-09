import {config} from '@tamagui/config-base';
import {createTamagui, createTokens, setupReactNative} from '@tamagui/core';
import * as ReactNative from 'react-native';
import colors from './colors';

setupReactNative(ReactNative);

export const tamaguiTokens = createTokens({
    ...config.tokens,
    color: colors
});

const tamaguiConfig = createTamagui({
    ...config,
    tokens: tamaguiTokens,
    media: {
        sm: {maxWidth: 500}
    },
    fonts: {
        ...config.fonts,
    }
});

export default tamaguiConfig;
