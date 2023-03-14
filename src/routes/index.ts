import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { Home } from './Home';
import { Edit } from './Edit';

type RouteConfig = {
  name: string;
  component: () => JSX.Element;
  options?: NativeStackNavigationOptions;
};
type Route = { [key: string]: RouteConfig };

export const Routes: Route = {
  Home: { name: 'Home', component: Home, options: { headerShown: false } },
  Edit: { name: 'Edit', component: Edit, options: { headerShown: false } },
};
