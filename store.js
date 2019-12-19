import {createStore, applyMiddleware} from 'redux';
import reducer from './src/reducers/reducerList';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import reduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
const persistor = persistStore(store);

export {store, persistor};
