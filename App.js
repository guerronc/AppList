/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './src/screens/Home';
import Header from './src/components/Header';
import List from './src/components/List';
import CheckList from './src/screens/CheckList';
import DeatilList from './src/components/DetailList';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import {Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>cargando...</Text>} persistor={persistor}>
          <Home>
            <Header />
            <List />
          </Home>
          {/* <CheckList>
          <Header />
          <DeatilList />
        </CheckList> */}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
