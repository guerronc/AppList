/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './src/Screens/Home';
import Header from './src/Components/Header';
import List from './src/Components/List';
import CheckList from './src/Screens/CheckList';
import DeatilList from './src/Components/DetailList';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <List />
        </Home>
        <CheckList>
          <Header />
          <DeatilList />
        </CheckList>
      </Provider>
    );
  }
}

export default App;
