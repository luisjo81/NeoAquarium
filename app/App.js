//React Navigation Components
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

//Screen Components
import LoginScreen from './src/screens/login';
import SigninScreen from './src/screens/signin';
import HomeScreen from './src/screens/home';
import MenuScreen from './src/screens/menu';
import FeatureFood from './src/screens/features/food';
import FeatureFiltration from './src/screens/features/filtration';
import FeatureLight from './src/screens/features/lights';
import FeatureTemperature from './src/screens/features/temperature';
import FeatureHumidity from './src/screens/features/humidity';
import FeatureWaterLevel from './src/screens/features/water-level';

//Stack Navigator
const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Signin: { screen: SigninScreen },
  Home: { screen: HomeScreen },
  Menu: { screen: MenuScreen },
  Food: { screen: FeatureFood },
  Filtration: { screen: FeatureFiltration },
  Light: { screen: FeatureLight },
  Temperature: { screen: FeatureTemperature },
  Humidity: { screen: FeatureHumidity },
  WaterLevel: { screen: FeatureWaterLevel }
});

const App = createAppContainer(MainNavigator);
export default App
