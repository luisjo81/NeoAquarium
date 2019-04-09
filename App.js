import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import MenuScreen from './src/screens/menu';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const MainNavigator = createStackNavigator({  
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen},
  Menu: { screen: MenuScreen }
});

const App = createAppContainer(MainNavigator);

export default App