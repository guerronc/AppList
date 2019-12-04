/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Text} from 'react-native';

import Home from './src/Screens/Home';
import Header from './src/Components/Header';
import List from './src/Components/List';

class App extends Component {
  render() {
    return (
      <Home>
        <Header />
        <List></List>
      </Home>
    );
  }
}

export default App;
