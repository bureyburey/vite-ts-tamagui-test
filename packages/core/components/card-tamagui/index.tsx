import React from 'react';
import { ImageBackground } from 'react-native';
import { YStack, Text, Card } from 'tamagui';
import useOnHover from '../../hooks/useOnHover';
import { CardHeader } from './header';
import { CardMeta } from './meta';
import { shadow } from '../../config/style';

export function CardTamagui(props: any) {
  const [isHovered, callbacks] = useOnHover();
  const { data } = props;
  const { campaign } = data;
  const { merchant, image_url: imageUrl } = campaign;

  return (
    <Card {...callbacks} {...style.container}>
      <YStack {...style.imageContainer}>
        <ImageBackground style={style.image} source={{ uri: imageUrl }} resizeMode="cover">
          <YStack {...style.stateLabelWrapper}>
            <Text {...style.stateLabel}>State</Text>
          </YStack>
        </ImageBackground>
      </YStack>
      <YStack {...style.content}>
        <CardHeader
          topTitle={merchant.name}
          title={campaign.name}
          network={campaign.network}
          isHovered={isHovered}
        />
        <CardMeta data={data} />
      </YStack>
    </Card>
  );
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: 350,
    height: 450,
    margin: 5,
    backgroundColor: '#fff',
    ...shadow({
      color: 'rgba(0, 0, 0, 0.11)',
      opacity: 0.11,
      radius: 1,
      offsetWidth: 0,
      offsetHeight: 1
    }),
    $sm: {
      flexDirection: 'row',
      minWidth: '97.5%',
      maxWidth: '97.5%',
      height: 160
    }
  },
  imageContainer: {
    width: '100%',
    height: 180,
    minHeight: 180,
    $sm: {
      width: 150,
      height: 140,
      minHeight: 140,
      margin: 7
    }
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end'
  },
  stateLabelWrapper: {
    margin: 5,
    padding: 7,
    backgroundColor: '#F2F8FF',
    borderRadius: 5,
    $sm: {
      transform: [{ scale: 0.7 }, { translateX: 8 }, { translateY: -8 }]
    }
  },
  stateLabel: {
    color: '#3894FD'
  },
  content: {
    flex: 1,
    padding: 16,
    height: '100%',
    width: '100%'
  }
} as const;
