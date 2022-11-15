import React from 'react';
import { ScrollView, YStack } from 'tamagui';
import { CardTamagui } from '../../components/card-tamagui';
import DATA from '../../mockData/paidGigs.json';

const style = {
  container: {
    contentContainerStyle: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    $sm: {
      flexDirection: 'column'
    }
  },
  cardWrapper: {
    width: '32%',
    $sm: {
      width: '100%'
    }
  }
} as const;

export function ResponsiveCardsListTamaguiTest() {
  const data = DATA;

  return (
    <ScrollView
      // contentContainerStyle={style.container}
      {...style.container}>
      {data.map((item) => (
        <YStack key={item.id} {...style.cardWrapper}>
          <CardTamagui data={item}/>
        </YStack>
      ))}
    </ScrollView>
  );
}
