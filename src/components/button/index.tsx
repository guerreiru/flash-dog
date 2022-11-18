import { TouchableOpacityProps } from 'react-native';
import { Text } from '../typography';
import { ButtonStyled } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, ...props }: IButtonProps) {
  return (
    <ButtonStyled {...props} activeOpacity={0.7}>
      <Text weight='bold'>{label}</Text>
    </ButtonStyled>
  );
}
