import { useNavigation as useLibNavigation } from '@react-navigation/native';
import { MyRoutesEnum } from '../routes/routes';

export function useNavigation() {
  const nav = useLibNavigation();
  function navigate(
    route: keyof typeof MyRoutesEnum,
    params?: { [key: string]: string | number }
  ) {
    nav.navigate(route as never, params as never);
  }
  return { ...nav, navigate };
}
