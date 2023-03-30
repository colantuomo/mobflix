import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FloatButton } from '../../components/FloatButton';

import { Header } from '../../components/Header';
import { useNavigation } from '../../hooks/useNavigation';
import { theme } from '../../styles';
import { MainContainer } from './styles';

export function Home() {
  const { navigate } = useNavigation();
  function navigateToEdit() {
    navigate('Edit');
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <MainContainer>
        <Header />
        <FloatButton onClick={navigateToEdit} />
      </MainContainer>
    </SafeAreaView>
  );
}
