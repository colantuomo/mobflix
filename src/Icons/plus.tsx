import Svg, { Line } from 'react-native-svg';

interface Props {
  color?: string;
}

export function Plus({ color = 'white' }: Props) {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Line
        x1="12.9167"
        y1="4.7354e-08"
        x2="12.9167"
        y2="26"
        stroke={color}
        stroke-width="5"
      />
      <Line
        x1="26"
        y1="12.9167"
        x2="-9.4708e-08"
        y2="12.9167"
        stroke={color}
        stroke-width="5"
      />
    </Svg>
  );
}
