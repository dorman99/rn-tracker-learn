import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/AccountScreen";
import SigninScreen from "./src/SigninScreen";
import SignupScreen from "./src/SignupScreen";
import TrackCreateScreen from "./src/TrackCreateScreen";
import TrackListScreen from "./src/TrackListScreen";
import TrackDetailScreen from "./src/TrackDetailScreen";
import { Provider as AuthProvider } from "./src/contexts/AuthContext";

const switcNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TracCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});
const App = createAppContainer(switcNavigator);
export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
