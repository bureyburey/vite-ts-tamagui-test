import {Platform} from 'react-native';
import tamaguiConfig from '../config/tamagui.config';

export const colors = tamaguiConfig.tokens.color;

export const CONSTANTS = {
    $textSmall: 12,
    $textMedium: 14,
    $textRegular: 16,
    $textBig: 20
};

export const MOBILE_BREAK = 500;
export const MEDIA_QUERY_BREAK_PHONE = `@media (max-width: ${MOBILE_BREAK})`;


type ShadowProps = {
    color?: string;
    opacity?: number;
    radius?: number;
    offsetWidth?: number;
    offsetHeight?: number;
    elevation?: number;
};

export const shadow = (props: ShadowProps) => {
    const {color, opacity, radius, offsetWidth, offsetHeight, elevation} = props;
    return Platform.select({
        ios: {
            shadowColor: color,
            shadowOpacity: opacity,
            shadowRadius: radius,
            shadowOffset: {
                width: offsetWidth,
                height: offsetHeight
            }
        },
        android: {
            elevation
        },
        web: {
            boxShadow: `${offsetWidth}px ${offsetHeight}px ${radius}px ${radius}px ${color}`
        }
    });
};
