import React, { useState } from 'react';
import { ID, TCategory } from '../../interfaces';
import { Typography } from '../Typography';
import { ChipContainer, ChipsContainer } from './styles';

interface Props {
  categories: TCategory[];
  selectedCategory?: TCategory | undefined;
  onSelect?: (category: TCategory) => void;
}

interface ChipsProps {
  name: string;
  color: string;
  isSelected?: boolean;
  id: ID;
  onPress?: (id: string | number) => void;
}

export function Chip({ name, color, isSelected, id, onPress }: ChipsProps) {
  return (
    <ChipContainer
      color={color}
      isSelected={isSelected}
      onPressOut={() => onPress?.(id)}
    >
      <Typography size="sm">{name}</Typography>
    </ChipContainer>
  );
}

export function CategoriesSelection({ categories, selectedCategory }: Props) {
  const [IDSelected, setIDSelected] = useState<ID | undefined>(
    selectedCategory?.id
  );
  function onSelectedCategory(id: ID) {
    setIDSelected(id);
  }

  function isIDSelected(id: ID) {
    return id === IDSelected;
  }
  return (
    <ChipsContainer>
      {categories.map((category, idx) => (
        <Chip
          {...category}
          key={idx}
          onPress={onSelectedCategory}
          isSelected={isIDSelected(category.id)}
        />
      ))}
    </ChipsContainer>
  );
}
