import React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import { styled, XStack, YStack, Text as TamaguiText } from 'tamagui';
import { ContentCreationIcon } from '../../icons';
import { CONSTANTS, SHARED_STYLE } from '../../../config/style';

const TopTitleText = styled(TamaguiText, {
  name: 'TopTitleText'
});

const TitleText = styled(TamaguiText, {
  name: 'TitleText'
});

const NETWORK_ICONS = {
  pinterest: <FontAwesome name="pinterest" size={20} color="#404040" />,
  instagram: <FontAwesome name="instagram" size={20} color="#404040" />,
  youtube: <FontAwesome name="youtube-play" size={20} color="#404040" />,
  facebook: <FontAwesome name="facebook-official" size={20} color="#404040" />,
  tiktok: <FontAwesome5 name="tiktok" size={20} color="#404040" />,
  contentCreation: <ContentCreationIcon />
};

export function CardHeader({ topTitle, title, network, isHovered }) {
  return (
    <YStack {...style.container}>
      <XStack {...style.top}>
        <TopTitleText {...style.topTitle}>{topTitle}</TopTitleText>
        <XStack {...style.network}>
          <TamaguiText>{NETWORK_ICONS[network || 'contentCreation']}</TamaguiText>
        </XStack>
      </XStack>
      <XStack {...style.bottom}>
        <TitleText {...style.title} {...(isHovered && SHARED_STYLE.$hover)} numberOfLines={2}>
          {title}
        </TitleText>
      </XStack>
    </YStack>
  );
}

const style = {
  container: {
    height: '40%',
    $sm: {
      height: '50%'
    }
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  topTitle: {
    color: '#999999',
    fontSize: CONSTANTS.$textRegular,
    $sm: {
      fontSize: CONSTANTS.$textSmall
    }
  },
  network: {
    $sm: {
      transform: [{ scale: 0.8 }]
    }
  },
  bottom: {},
  title: {
    fontSize: CONSTANTS.$textBig,
    fontWeight: '500',
    $sm: {
      fontSize: CONSTANTS.$textRegular
    }
  }
};
