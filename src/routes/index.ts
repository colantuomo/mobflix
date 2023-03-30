import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { Home } from './Home';
import { Edit } from './Edit';
import { MyRoutesEnum } from './routes';

type RouteConfig = {
  name: string;
  component: (route?: any) => JSX.Element;
  options?: NativeStackNavigationOptions;
};
type Route = { [key in MyRoutesEnum]: RouteConfig };

export const Routes: Route = {
  Home: { name: 'Home', component: Home, options: { headerShown: false } },
  Edit: { name: 'Edit', component: Edit, options: { headerShown: false } },
};
