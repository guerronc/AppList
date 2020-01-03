/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import {Text} from 'react-native';
import AppContainer from './src/app-navigator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>cargando...</Text>} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
