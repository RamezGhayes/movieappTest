import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PageOne from './PageOne';

const navigator = createStackNavigator(
  {
    MoviesAPP: PageOne,
  },
  {
    initialRouteName: 'MoviesAPP',
  }
);

export default createAppContainer(navigator);