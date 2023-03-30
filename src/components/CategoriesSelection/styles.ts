import styled from 'styled-components/native';

export const ChipsContainer = styled.View`
  flex-direction: row;
  row-gap: 10px;
  flex-wrap: wrap;
`;

interface ChipsProps {
  color: string;
  isSelected?: boolean;
}

export const ChipContainer = styled.TouchableOpacity<ChipsProps>`
  background-color: ${({ color }) => color};
  padding: 15px;
  border-radius: 50%;
  height: 60px;
  margin: 5px;
  border: ${({ isSelected }) => (isSelected ? '2px solid white' : '')};
  align-items: center;
  justify-content: center;
`;
