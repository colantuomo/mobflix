import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FloatButton } from '../../components/FloatButton';

import { Header } from '../../components/Header';
import { theme } from '../../styles';
import { MainContainer } from './styles';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <MainContainer>
        <Header />
        <FloatButton />
      </MainContainer>
    </SafeAreaView>
  );
}
