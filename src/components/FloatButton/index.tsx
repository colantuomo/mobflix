import { Plus } from '../../Icons';
import { ButtonContainer, RoundedButton } from './styles';

interface Props {
  onClick?: () => void;
}

export function FloatButton({ onClick }: Props) {
  return (
    <ButtonContainer>
      <RoundedButton onPress={onClick}>
        <Plus />
      </RoundedButton>
    </ButtonContainer>
  );
}
