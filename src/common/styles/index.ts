import styled from 'styled-components/native';
import { theme } from '../../styles';

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 30px;
`;

export const Input = styled.TextInput`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
`;
