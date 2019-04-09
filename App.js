import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import MenuScreen from './src/screens/menu';
import FeatureFood from './src/screens/features/food';

const MainNavigator = createStackNavigator({  
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen},
  Menu: { screen: MenuScreen },
  Food: { screen: FeatureFood}
});

const App = createAppContainer(MainNavigator);

export default App