import styled from 'styled-components/native';
import { theme } from '../../styles';

export const ButtonContainer = styled.View`
  padding: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
`;

export const RoundedButton = styled.TouchableOpacity`
  background-color: ${theme.colors.purple};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
