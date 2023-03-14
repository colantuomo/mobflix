import styled from 'styled-components/native';
import { theme } from '../../styles';

interface TypographyProps {
  size?: keyof typeof theme.typography.sizes;
  weight?: keyof typeof theme.typography.weigth;
  color?: keyof typeof theme.colors;
}

export const Typography = styled.Text<TypographyProps>`
  font-family: ${({ weight }) => theme.typography.weigth[weight ?? 'normal']};
  color: ${({ color }) => theme.colors[color ?? 'text']};
  font-size: ${({ size }) => theme.typography.sizes[size ?? 'sm']};
`;
