import {config} from '@tamagui/config-base';
import {createTamagui, createTokens} from '@tamagui/core';
import colors from './colors';

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
