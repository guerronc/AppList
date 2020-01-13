import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './screens/Home';
import CheckList from './screens/CheckList';
import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import About from './screens/About';
import Loading from './screens/Loading';
import Login from './screens/Login';

const Main = createStackNavigator(
  {
    Home: Home,
    CheckList: CheckList,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {backgroundColor: '#8D27F2'},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      gestureEnabled: true,
    },
    headerMode: 'screen',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Main: Main,
    About: About,
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    contentOptions: {},
  },
);

const AppSwitch = createSwitchNavigator({
  // Loading: {
  //   screen: Loading,
  // },
  // Login: {
  //   screen: Login,
  // },
  App: {
    screen: DrawerNavigator,
  },
});

const AppContainer = createAppContainer(AppSwitch);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
