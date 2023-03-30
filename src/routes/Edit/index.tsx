import React, { useState } from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';

import { useNavigation } from '../../hooks/useNavigation';
import { theme } from '../../styles';
import { getVideoById } from '../../services';
import { Input, MainContainer } from '../../common/styles';
import { EditContainer } from './styles';
import { Typography } from '../../components/Typography';
import { CategoriesSelection } from '../../components/CategoriesSelection';
import { TCategory } from '../../interfaces';

interface Params {
  id: string | undefined;
}
interface ParamList extends ParamListBase {
  [key: string]: Params;
}
type RouteParam = RouteProp<ParamList, string>;

const categories = [
  { id: 1, name: 'Música', color: '#f15bb5' },
  { id: 2, name: 'Comédia', color: '#fee440' },
  { id: 3, name: 'Programação', color: '#00bbf9' },
  { id: 4, name: 'Games', color: '#00f5d4' },
];

export function Edit() {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteParam>();
  const { url, category } = getVideoById(params?.id);
  const [myUrl, setUrl] = useState(url);
  const [myCategory, setCategory] = useState(category);

  function onSelectCategory(category: TCategory) {
    setCategory(category);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <MainContainer>
        <EditContainer>
          <Typography weight="bold" size="xl">
            Cadastre um vídeo:
          </Typography>
          <Input spellCheck={false} autoCapitalize="none" />
          <CategoriesSelection
            categories={categories}
            selectedCategory={category}
            onSelect={onSelectCategory}
          />
          <Button onPress={goBack} title="Go back" />
        </EditContainer>
      </MainContainer>
    </SafeAreaView>
  );
}
