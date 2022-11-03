import { config } from '@tamagui/config-base';
import { createTamagui, createTokens } from '@tamagui/core';
import colors from './colors';
// import akkuratFont from './fonts';

export const tamaguiTokens = createTokens({
    ...config.tokens,
    color: colors
});

const tamaguiConfig = createTamagui({
    ...config,
    // themes: {
    //   light: {
    //     ...colors
    //     // ...config.themes.light
    //   }
    // },
    tokens: tamaguiTokens,
    media: {
        sm: { maxWidth: 500 }
    },
    fonts: {
        ...config.fonts,
        // heading: akkuratFont,
        // body: akkuratFont
    }
});

export default tamaguiConfig;
