import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './screens/Home';
import CheckList from './screens/CheckList';
import React, {Component} from 'react';

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

const AppContainer = createAppContainer(Main);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
